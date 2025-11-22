import { useState } from 'react'
import { studioProV1ABI } from '@factordao/contracts'
import { valueToBigInt, valueToBigNumber } from '@factordao/sdk'
import { StudioProVault } from '@factordao/sdk-studio'
import BigNumber from 'bignumber.js'
import { Address, arbitrum, base, createPublicClient, http } from 'viem'
import { useSendTransaction, useChainId } from 'wagmi'
import { environment } from '@/lib/constants/dev'
import { getRpcUrlForChain } from '@/lib/constants/rpc'

// Helper contract addresses by chain
const HELPER_CONTRACT_ADDRESSES: { [chainId: number]: Address } = {
  [arbitrum.id]: '0x6B52b949d26067C131c6BEfD44A4170e36bdf54C',
  [base.id]: '0x0bb7616b57e27b65f96a466668b12934e4f514ba',
}

// Simplified helper ABI for getIsDirectWithdrawals
const helperABI = [
  {
    inputs: [
      { internalType: 'address', name: '_vault', type: 'address' },
      { internalType: 'uint256', name: 'shares', type: 'uint256' },
    ],
    name: 'getIsDirectWithdrawals',
    outputs: [
      { internalType: 'address[]', name: 'assets', type: 'address[]' },
      { internalType: 'bool[]', name: 'isDirectWithdrawals', type: 'bool[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

interface UseProVaultWithdrawParams {
  vaultAddress: Address
  tokenAddress: Address
  withdrawAmount: string
  depositorAddress: Address
  receiverAddress: Address
  onSuccess?: () => void
  slippageTolerance: string
  chainId?: number
  withdrawAmountRaw?: string
}

export function useProVaultWithdraw({
  vaultAddress,
  tokenAddress,
  withdrawAmount,
  depositorAddress,
  receiverAddress,
  onSuccess,
  slippageTolerance,
  chainId,
  withdrawAmountRaw,
}: UseProVaultWithdrawParams) {
  const [isWaitingForWithdraw, setIsWaitingForWithdraw] = useState(false)
  const { sendTransactionAsync } = useSendTransaction()
  const currentChainId = useChainId()

  const handleWithdraw = async () => {
    try {
      const effectiveChainId = chainId || currentChainId || base.id
      setIsWaitingForWithdraw(true)
      const proVault = new StudioProVault({
        chainId: effectiveChainId,
        vaultAddress,
        environment: environment,
        jsonRpcUrl: getRpcUrlForChain(effectiveChainId),
      })
      const publicClient = createPublicClient({
        chain: effectiveChainId === arbitrum.id ? arbitrum : base,
        transport: http(getRpcUrlForChain(effectiveChainId)),
      })
      const denominator = await publicClient.readContract({
        address: vaultAddress,
        abi: studioProV1ABI,
        functionName: 'getDenominator',
        args: [],
      })

      // Determine tokenAmount: use raw if provided, otherwise calculate from withdrawAmount
      let tokenAmount: string

      if (withdrawAmountRaw) {
        tokenAmount = withdrawAmountRaw
      } else {
        let denominatorDecimals = 18
        try {
          const decimalsResult = await publicClient.readContract({
            address: denominator as Address,
            abi: [
              {
                name: 'decimals',
                type: 'function',
                stateMutability: 'view',
                inputs: [],
                outputs: [{ name: '', type: 'uint8' }],
              },
            ],
            functionName: 'decimals',
            args: [],
          })
          denominatorDecimals = Number(decimalsResult)
        } catch (error) {
          denominatorDecimals = 18
        }

        tokenAmount = BigNumber(withdrawAmount)
          .multipliedBy(BigNumber(10).pow(denominatorDecimals))
          .integerValue(BigNumber.ROUND_DOWN)
          .toString()
      }
      let withdrawData: any

      const helperContractAddress =
        HELPER_CONTRACT_ADDRESSES[effectiveChainId] || HELPER_CONTRACT_ADDRESSES[base.id]

      try {
        // Use helper contract to check if direct withdrawal is possible
        const directWithdrawData = (await publicClient.readContract({
          address: helperContractAddress,
          abi: helperABI,
          functionName: 'getIsDirectWithdrawals',
          args: [vaultAddress, valueToBigInt(tokenAmount)],
        })) as [Address[], boolean[]]
        const withdrawAssetList = directWithdrawData[0]
        const isDirectWithdraw = directWithdrawData[1]
        const directWithdrawMap = withdrawAssetList.reduce((acc, address, index) => {
          acc[address.toLowerCase()] = isDirectWithdraw[index]
          return acc
        }, {} as Record<string, boolean>)

        // Check if the token can be directly withdrawn
        if (directWithdrawMap[tokenAddress.toLowerCase()]) {
          withdrawData = proVault.withdrawAsset({
            assetAddress: tokenAddress,
            shareAmountBN: tokenAmount,
            depositorAddress,
            receiverAddress,
          })
        } else {
          // For non-direct withdrawals, use estimateRawWithdrawExpectedAmount
          // This is a simplified version - in production you'd parse the exit strategy
          const result = await proVault.estimateRawWithdrawExpectedAmount(valueToBigInt(tokenAmount))
          const isWithdraw: boolean[] = []
          for (const asset of result[2]) {
            isWithdraw.push(true)
          }

          // Simplified withdraw - in production you'd parse the exit strategy properly
          withdrawData = proVault.rawWithdraw({
            shareAmountBN: valueToBigNumber(tokenAmount),
            receiverAddress,
            depositorAddress,
            withdrawBlocks: [],
            isWithdraw,
          })
        }
      } catch (helperError) {
        setIsWaitingForWithdraw(false)
        return
      }

      if (!withdrawData) {
        setIsWaitingForWithdraw(false)
        return
      }

      const hash = await sendTransactionAsync(withdrawData)
      const withdrawReceipt = await publicClient.waitForTransactionReceipt({
        hash,
      })
      if (!withdrawReceipt) {
        throw new Error('Withdraw transaction failed')
      }
      setIsWaitingForWithdraw(false)
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      setIsWaitingForWithdraw(false)
      throw error
    }
  }

  return {
    handleWithdraw,
    isWaitingForWithdraw,
  }
}

