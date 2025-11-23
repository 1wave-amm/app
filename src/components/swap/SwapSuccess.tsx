import { ExternalLink, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMemo } from "react"
import { FactorTokenlist } from "@factordao/tokenlist"
import { useAccount } from "wagmi"

interface SwapSuccessProps {
  tokenIn: string
  tokenOut: string
  amountIn: string
  amountOut: string
  transactionHash: string
  onClose: () => void
}

export function SwapSuccess({
  tokenIn,
  tokenOut,
  amountIn,
  amountOut,
  transactionHash,
  onClose
}: SwapSuccessProps) {
  const basescanUrl = `https://basescan.org/tx/${transactionHash}`
  const { chainId = 8453 } = useAccount()

  // Get token info
  const tokenInInfo = useMemo(() => {
    if (!tokenIn) return null
    try {
      const tokenlist = new FactorTokenlist(chainId as any)
      const tokens = tokenlist.getAllGeneralTokens()
      return tokens.find((t: any) => t.address?.toLowerCase() === tokenIn.toLowerCase()) || null
    } catch {
      return null
    }
  }, [tokenIn, chainId])

  const tokenOutInfo = useMemo(() => {
    if (!tokenOut) return null
    try {
      const tokenlist = new FactorTokenlist(chainId as any)
      const tokens = tokenlist.getAllGeneralTokens()
      return tokens.find((t: any) => t.address?.toLowerCase() === tokenOut.toLowerCase()) || null
    } catch {
      return null
    }
  }, [tokenOut, chainId])

  const formatAmount = (amount: string) => {
    return parseFloat(amount).toLocaleString(undefined, {
      maximumFractionDigits: 6,
      minimumFractionDigits: 0,
    })
  }
  
  return (
    <div className="space-y-6 p-6 rounded-lg bg-muted/30 border border-border/50">
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-green-500">Swap Completed!</h3>
      </div>

      {/* Token IN */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Token In</label>
        <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
          <div className="flex items-center gap-2">
            {tokenInInfo?.logoUrl && (
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                <img
                  src={tokenInInfo.logoUrl}
                  alt={tokenInInfo.symbol}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )}
            <span className="font-medium text-base">{tokenInInfo?.symbol || 'Unknown'}</span>
          </div>
          <span className="text-xl font-semibold">{formatAmount(amountIn)}</span>
        </div>
      </div>

      {/* Token OUT */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Token Out</label>
        <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
          <div className="flex items-center gap-2">
            {tokenOutInfo?.logoUrl && (
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                <img
                  src={tokenOutInfo.logoUrl}
                  alt={tokenOutInfo.symbol}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )}
            <span className="font-medium text-base">{tokenOutInfo?.symbol || 'Unknown'}</span>
          </div>
          <span className="text-xl font-semibold">{formatAmount(amountOut)}</span>
        </div>
      </div>

      {/* Transaction Hash */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Transaction Hash</label>
        <Button
          variant="glass"
          className="w-full justify-between h-auto py-3"
          onClick={() => window.open(basescanUrl, '_blank')}
        >
          <span className="font-mono text-sm truncate">
            {transactionHash.slice(0, 10)}...{transactionHash.slice(-8)}
          </span>
          <ExternalLink className="h-4 w-4 flex-shrink-0 ml-2" />
        </Button>
      </div>

      {/* Close Button */}
      <Button
        variant="glass-apple"
        className="w-full rounded-full h-12 text-base font-medium"
        onClick={onClose}
      >
        Close
      </Button>
    </div>
  )
}

