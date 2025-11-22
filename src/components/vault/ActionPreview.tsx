interface ActionPreviewProps {
  title: string
  receivedShares: number
  tokenSymbol?: string
  sharesString?: string
  rawValue?: string
}

export function ActionPreview({
  title,
  receivedShares,
  tokenSymbol,
  sharesString,
  rawValue,
}: ActionPreviewProps) {
  const formatCompactNumber = (value: string) => {
    if (!value) return <span>0</span>

    const parts = value.split('.')
    const wholeNumber = parts[0] || '0'
    const decimals = parts[1] || ''

    const leadingZeros = decimals.match(/^0+/)?.[0].length || 0

    if (leadingZeros > 0) {
      const firstNonZeroIndex = decimals.search(/[1-9]/)
      if (firstNonZeroIndex !== -1) {
        const significantDigits = decimals.slice(firstNonZeroIndex)
        return (
          <span>
            0,0<span className="opacity-50 text-[10px] align-super">{leadingZeros}</span>
            {significantDigits}
          </span>
        )
      } else {
        return <span>0,0</span>
      }
    }

    return <span>{value.replace('.', ',')}</span>
  }

  const formatFullNumber = (value: string): string => {
    if (!value) return '0'
    return value.replace('.', ',')
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-medium text-foreground">{title}</h3>
      <div className="bg-gray-100 dark:bg-[#1B1E20] rounded-md border border-input p-3 space-y-2">
        <div className="flex justify-between">
          <p className="text-sm text-muted-foreground">You will receive:</p>
          <div className="font-mono text-sm font-semibold text-foreground flex flex-col items-end">
            <div>
              {sharesString ? (
                <span className="text-foreground cursor-help" title={formatFullNumber(sharesString)}>
                  {formatCompactNumber(sharesString)} {tokenSymbol}
                </span>
              ) : (
                <span className="text-foreground">
                  {receivedShares.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 6,
                  })}{' '}
                  {tokenSymbol}
                </span>
              )}
            </div>
            {rawValue && (
              <span className="text-[10px] text-muted-foreground mt-1 font-mono">{rawValue}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

