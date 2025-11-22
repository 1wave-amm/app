import { useState } from 'react'
import { erc20ABI } from '@factordao/contracts'
import { ChainId } from '@factordao/sdk'
import { StudioProVault, StudioProVaultStats, TokenMetadata } from '@factordao/sdk-studio'
import BigNumber from 'bignumber.js'
import { Address, base, createPublicClient, http } from 'viem'
import { useSendTransaction, useWriteContract } from 'wagmi'
import { environment } from '@/lib/constants/dev'
import { BASE_CHAIN_ID, getBaseRpcUrl } from '@/lib/constants/rpc'

interface UseProVaultDepositProps {
  vaultAddress: Address
  token: TokenMetadata | undefined
  amount: string
  receiverAddress: Address
  onSuccess?: () => void
}

export function useProVaultDeposit({
  vaultAddress,
  token,
  amount,
  receiverAddress,
  onSuccess,
}: UseProVaultDepositProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { sendTransactionAsync } = useSendTransaction()
  const { writeContractAsync } = useWriteContract()
  const [steps, setSteps] = useState({
    approve: 'idle' as 'idle' | 'loading' | 'success' | 'error',
    deposit: 'idle' as 'idle' | 'loading' | 'success' | 'error',
  })

  const getCurrentAllowance = async () => {
    if (!token) return BigNumber(0)
    try {
      const publicClient = createPublicClient({
        chain: base,
        transport: http(getBaseRpcUrl()),
      })
      const allowance = await publicClient.readContract({
        abi: erc20ABI,
        address: token.address as Address,
        functionName: 'allowance',
        args: [receiverAddress, vaultAddress],
      })
      return BigNumber(allowance.toString())
    } catch (error) {
      return BigNumber(0)
    }
  }

  const handleDepositWithApproval = async () => {
    if (!token) return

    // Validate chain ID before proceeding
    if (!validateChainId(chainId)) {
      throw new Error(`Unsupported chain ID: ${chainId}. Only Arbitrum (42161) and Base (8453) are supported.`)
    }

    try {
      setIsLoading(true)
      setSteps({ approve: 'loading', deposit: 'idle' })
      const currentAllowance = await getCurrentAllowance()
      const tokenAmount = BigNumber(amount)
        .multipliedBy(BigNumber(10).pow(token.decimals))
        .integerValue(BigNumber.ROUND_DOWN)
      if (currentAllowance.isLessThan(tokenAmount)) {
        const hash = await writeContractAsync({
          address: token.address,
          abi: erc20ABI,
          functionName: 'approve',
          chain: { id: chainId, name: chainId === arbitrum.id ? 'Arbitrum' : 'Base' } as Chain,
          account: receiverAddress,
          args: [vaultAddress, BigInt(tokenAmount.toFixed(0))],
        })
        const publicClient = createPublicClient({
          chain: chainId === arbitrum.id ? arbitrum : base,
          transport: http(getRpcUrlForChain(chainId)),
        })
        const allowanceReceipt = await publicClient.waitForTransactionReceipt({
          hash,
        })
        if (!allowanceReceipt) {
          throw new Error('Allowance transaction failed')
        }
      }
      setSteps({ approve: 'success', deposit: 'loading' })

      const sdkChainId = getSdkChainId(chainId)

      const proVault = new StudioProVault({
        chainId: sdkChainId,
        vaultAddress,
        environment: environment,
        jsonRpcUrl: getRpcUrlForChain(chainId),
      })

      // Create deposit payload
      const payload = {
        assetAddress: token.address,
        amountBN: tokenAmount,
        receiverAddress,
      }

      // Handle deposit strategy retrieval with error handling
      let depositData
      try {
        const proVaultStats = new StudioProVaultStats({
          chainId: sdkChainId,
          vaultAddress: vaultAddress as Address,
          environment: environment,
          jsonRpcUrl: getRpcUrlForChain(chainId),
        })
        const depositStrategy = await proVaultStats.getDepositStrategy()

        // Use standard depositAsset method with the strategy info
        depositData = proVault.depositAsset(payload)
      } catch (statsError) {
        // Fallback to direct deposit without strategy info
        depositData = proVault.depositAsset(payload)
      }
      const hash = await sendTransactionAsync({
        ...depositData,
        chainId: chainId,
      })

      const publicClient = createPublicClient({
        chain: chainId === arbitrum.id ? arbitrum : base,
        transport: http(getRpcUrlForChain(chainId)),
      })
      const depositReceipt = await publicClient.waitForTransactionReceipt({
        hash,
      })
      if (!depositReceipt) {
        throw new Error('Deposit transaction failed')
      }
      setSteps({ approve: 'success', deposit: 'success' })
      setIsLoading(false)
      onSuccess?.()
    } catch (error) {
      setIsLoading(false)
      setSteps({ approve: 'error', deposit: 'error' })
      throw error
    }
  }

  return {
    handleDepositWithApproval,
    isLoading,
    steps,
  }
}

