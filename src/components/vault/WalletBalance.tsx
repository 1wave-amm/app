interface WalletBalanceProps {
  balance: number
  tokenSymbol?: string
  label?: string
}

export function WalletBalance({
  balance,
  tokenSymbol,
  label = 'Wallet balance:',
}: WalletBalanceProps) {
  const isVerySmallNumber = balance > 0 && balance < 0.0001

  return (
    <div className="flex flex-col items-start">
      <p className="text-sm text-muted-foreground">{label}</p>
      {isVerySmallNumber ? (
        <div className="flex items-center gap-1">
          <span className="text-foreground text-xs">
            {'<'}0.0001
          </span>
          <span className="text-foreground text-xs">{tokenSymbol}</span>
        </div>
      ) : (
        <span className="text-foreground text-xs">
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6,
          })}{' '}
          {tokenSymbol}
        </span>
      )}
    </div>
  )
}

