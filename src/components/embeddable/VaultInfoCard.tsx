import { useQuery } from "@tanstack/react-query"
import { fetchVaultByAddressWithFallback, AggregatedVault } from "@/services/vaultService"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { VaultWidgetTheme } from "./theme"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { FactorTokenlist } from "@factordao/tokenlist"
import { useMemo } from "react"

interface VaultInfoCardProps {
  vaultAddress: string
  theme: VaultWidgetTheme
  customLabels?: {
    vaultName?: string
    [key: string]: string | undefined
  }
  hideAddress?: boolean
  showTokenChips?: boolean
  showAquaPairs?: boolean
  hideFees?: boolean
  hidePerformance?: boolean
  showTVL?: boolean
}

function formatPerformance(pnl?: string) {
  if (!pnl) return null
  const value = parseFloat(pnl.replace("%", ""))
  if (isNaN(value)) return null
  
  const isPositive = value > 0
  const isNegative = value < 0
  
  return {
    value: Math.abs(value).toFixed(2),
    isPositive,
    isNegative,
    icon: isPositive ? TrendingUp : isNegative ? TrendingDown : Minus,
  }
}

function formatFee(fee?: string): string {
  if (!fee || fee === "0") return "0%"
  const feeNum = parseFloat(fee)
  if (isNaN(feeNum)) return "N/A"
  if (feeNum > 1000000) {
    const percentage = (feeNum / 1e18) * 100
    return percentage < 0.01 ? "0%" : `${percentage.toFixed(2)}%`
  }
  if (feeNum <= 100) {
    return feeNum < 0.01 ? "0%" : `${feeNum.toFixed(2)}%`
  }
  return `${(feeNum / 100).toFixed(2)}%`
}

export function VaultInfoCard({ 
  vaultAddress, 
  theme, 
  customLabels, 
  hideAddress,
  showTokenChips = false,
  showAquaPairs = false,
  hideFees = false,
  hidePerformance = false,
  showTVL = true,
}: VaultInfoCardProps) {
  const { data: vault, isLoading, error } = useQuery<AggregatedVault | null>({
    queryKey: ["vault", vaultAddress],
    queryFn: () => fetchVaultByAddressWithFallback(vaultAddress),
    retry: 2,
  })

  const tokenlistChainId = vault?.chainId ?? 8453

  // Tokenlist lookup (public package) - matches app behavior
  const tokenlistMap = useMemo(() => {
    try {
      const tokenlist = new FactorTokenlist(tokenlistChainId as any)
      const allTokens = tokenlist.getAllGeneralTokens()
      const map = new Map<string, { symbol: string; name: string; logoUrl: string; decimals: number }>()
      allTokens.forEach((token: any) => {
        if (!token.address) return
        map.set(token.address.toLowerCase(), {
          symbol: token.symbol,
          name: token.name,
          logoUrl: token.logoUrl || "",
          decimals: token.decimals ?? 18,
        })
      })
      if (import.meta.env.DEV) {
        const sample = allTokens.slice(0, 3).map((t: any) => ({
          address: t.address,
          symbol: t.symbol,
          logoUrl: t.logoUrl,
        }))
        console.log("[VaultWidget] tokenlist loaded", {
          chainId: tokenlistChainId,
          totalTokens: allTokens.length,
          withLogo: allTokens.filter((t: any) => !!t?.logoUrl).length,
          sample,
        })
      }
      return map
    } catch {
      if (import.meta.env.DEV) {
        console.log("[VaultWidget] tokenlist load failed", { chainId: tokenlistChainId })
      }
      return new Map<string, { symbol: string; name: string; logoUrl: string; decimals: number }>()
    }
  }, [tokenlistChainId])

  if (import.meta.env.DEV) {
    const resolved = (vault?.tokens || []).map((t: any) => {
      const info = t?.address ? tokenlistMap.get(t.address.toLowerCase()) : undefined
      return {
        address: t?.address,
        symbol: t?.symbol,
        logoUrl: info?.logoUrl,
      }
    })
    console.log("[VaultWidget] vault token logos", {
      vaultAddress,
      tokenCount: vault?.tokens?.length || 0,
      logosFound: resolved.filter((t) => !!t.logoUrl).length,
      resolved,
    })
  }

  // Enrich tokens with logos/symbols/decimals (same as /vault page)
  const enrichedTokens = useMemo(() => {
    if (!vault?.tokens || vault.tokens.length === 0) return []
    
    return vault.tokens.map((token) => {
      const addressLower = token.address?.toLowerCase()
      const tokenlistToken = addressLower ? tokenlistMap.get(addressLower) : undefined
      if (tokenlistToken) {
        return {
          ...(token as any),
          symbol: tokenlistToken.symbol || token.symbol,
          name: tokenlistToken.name || token.name,
          logoUrl: tokenlistToken.logoUrl,
          decimals: tokenlistToken.decimals ?? token.decimals ?? 18,
        }
      }
      return token
    })
  }, [vault?.tokens, tokenlistMap])

  if (isLoading) {
    return (
      <div
        style={{
          backgroundColor: theme.cardBackground,
          border: `1px solid ${theme.border}`,
          borderRadius: theme.borderRadius,
          padding: theme.padding,
        }}
      >
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    )
  }

  if (error || !vault) {
    return (
      <div
        style={{
          backgroundColor: theme.cardBackground,
          border: `1px solid ${theme.border}`,
          borderRadius: theme.borderRadius,
          padding: theme.padding,
          color: theme.error,
        }}
      >
        Error loading vault
      </div>
    )
  }

  const displayName = customLabels?.vaultName || vault.name.replace(/^ethGlobal - wave: /i, "")
  const perf24h = formatPerformance(vault.performance24h?.pnl)
  const perf7d = formatPerformance(vault.performance7d?.pnl)
  const perf30d = formatPerformance(vault.performance30d?.pnl)

  // Calculate grid columns for metrics
  const getMetricsGridColumns = () => {
    const visibleItems = [
      showTVL,
      !!vault.pricePerShareUsd,
      !hidePerformance && (perf24h || perf7d || perf30d),
    ].filter(Boolean).length
    
    if (visibleItems === 0) return "1fr"
    if (visibleItems === 1) return "1fr"
    if (visibleItems === 2) return "1fr 1fr"
    return "1fr 1fr"
  }

  return (
    <div
      style={{
        backgroundColor: theme.cardBackground,
        border: `1px solid ${theme.border}`,
        borderRadius: theme.borderRadius,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Header */}
      <div style={{ padding: theme.padding, paddingBottom: "0.5rem", paddingTop: "1rem" }}>
        {/* Token Logos + Name */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", marginBottom: "0.5rem" }}>
          {/* Token Logos - Overlapping Stack */}
          {enrichedTokens && enrichedTokens.length > 0 ? (
            <div style={{ display: "flex", marginLeft: "-0.5rem", flexShrink: 0 }}>
              {enrichedTokens.slice(0, 4).map((token, idx) => {
                const tokenLogo = (token as any).logoUrl
                const hasLogo = !!tokenLogo
                return (
                  <div
                    key={`${token.address}-${idx}`}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      backgroundColor: theme.background,
                      border: `2px solid ${theme.cardBackground}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      marginLeft: idx > 0 ? "-8px" : "0",
                      zIndex: enrichedTokens.length - idx,
                    }}
                    title={`${token.symbol || 'Unknown'} - ${token.name || 'Unknown Token'}`}
                  >
                    {hasLogo ? (
                      <img
                        src={tokenLogo}
                        alt={token.symbol || 'Token'}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => {
                          const target = e.currentTarget
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent && !parent.querySelector('span.fallback')) {
                            const fallback = document.createElement('span')
                            fallback.className = 'fallback'
                            fallback.style.cssText = `font-size: ${theme.fontSize.sm}; font-weight: bold; color: ${theme.textSecondary};`
                            fallback.textContent = token.symbol?.charAt(0)?.toUpperCase() || '?'
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: theme.fontSize.sm, fontWeight: "bold", color: theme.textSecondary }}>
                        {token.symbol?.charAt(0)?.toUpperCase() || '?'}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: theme.background, border: `2px solid ${theme.cardBackground}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: theme.fontSize.sm, fontWeight: "bold", color: theme.textSecondary }}>?</span>
            </div>
          )}
          
          {/* Name and Address */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontSize: theme.fontSize.base, fontWeight: "bold", marginBottom: "0.125rem", color: theme.text, lineHeight: 1.2 }}>
              {displayName}
            </h3>
            {!hideAddress && (
              <p style={{ fontSize: "9px", color: theme.textSecondary, marginBottom: "0.375rem" }}>
                {vault.address.slice(0, 6)}...{vault.address.slice(-4)}
              </p>
            )}
            {vault.protocols && vault.protocols.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                {vault.protocols.slice(0, 3).map((protocol, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "8px",
                      padding: "0.125rem 0.25rem",
                      height: "14px",
                      backgroundColor: theme.background,
                      border: `1px solid ${theme.border}`,
                      borderRadius: "0.25rem",
                      color: theme.textSecondary,
                    }}
                  >
                    {protocol}
                  </span>
                ))}
                {vault.protocols.length > 3 && (
                  <span
                    style={{
                      fontSize: "8px",
                      padding: "0.125rem 0.25rem",
                      height: "14px",
                      backgroundColor: theme.background,
                      border: `1px solid ${theme.border}`,
                      borderRadius: "0.25rem",
                      color: theme.textSecondary,
                    }}
                  >
                    +{vault.protocols.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Fees Section */}
        {!hideFees && (vault.managementFee || vault.depositFee || vault.withdrawFee || vault.performanceFee) && (
          <div style={{ paddingTop: "0.5rem", borderTop: `1px solid ${theme.border}` }}>
            <p style={{ fontSize: "9px", color: theme.textSecondary, fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
              Fees
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
              {vault.depositFee && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.125rem", padding: "0.125rem 0.375rem", borderRadius: "0.25rem", fontSize: "8px", backgroundColor: theme.background, opacity: 0.5, border: `1px solid ${theme.border}` }}>
                  <span style={{ color: theme.textSecondary }}>Dep:</span>
                  <span style={{ fontWeight: "600" }}>{formatFee(vault.depositFee)}</span>
                </div>
              )}
              {vault.withdrawFee && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.125rem", padding: "0.125rem 0.375rem", borderRadius: "0.25rem", fontSize: "8px", backgroundColor: theme.background, opacity: 0.5, border: `1px solid ${theme.border}` }}>
                  <span style={{ color: theme.textSecondary }}>Wth:</span>
                  <span style={{ fontWeight: "600" }}>{formatFee(vault.withdrawFee)}</span>
                </div>
              )}
              {vault.performanceFee && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.125rem", padding: "0.125rem 0.375rem", borderRadius: "0.25rem", fontSize: "8px", backgroundColor: theme.background, opacity: 0.5, border: `1px solid ${theme.border}` }}>
                  <span style={{ color: theme.textSecondary }}>Perf:</span>
                  <span style={{ fontWeight: "600" }}>{formatFee(vault.performanceFee)}</span>
                </div>
              )}
              {vault.managementFee && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.125rem", padding: "0.125rem 0.375rem", borderRadius: "0.25rem", fontSize: "8px", backgroundColor: theme.background, opacity: 0.5, border: `1px solid ${theme.border}` }}>
                  <span style={{ color: theme.textSecondary }}>Mgmt:</span>
                  <span style={{ fontWeight: "600" }}>{formatFee(vault.managementFee)}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div style={{ padding: "0.75rem", paddingTop: 0, flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {/* TVL, Share Price and Performance */}
        <div style={{ display: "grid", gridTemplateColumns: getMetricsGridColumns(), gap: "0.5rem" }}>
          {/* TVL */}
          {showTVL && (
            <div>
              <p style={{ fontSize: "10px", color: theme.textSecondary, fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.125rem" }}>
                TVL
              </p>
              <p style={{ fontSize: theme.fontSize.lg, fontWeight: "bold", color: theme.text }}>
                {vault.tvlUsd ? (
                  `$${parseFloat(vault.tvlUsd).toLocaleString(undefined, { 
                    maximumFractionDigits: 4,
                    minimumFractionDigits: 4
                  })}`
                ) : (
                  <span style={{ color: theme.textSecondary, fontSize: theme.fontSize.sm }}>N/A</span>
                )}
              </p>
            </div>
          )}
          
          {/* Share Price */}
          {vault.pricePerShareUsd && (
            <div>
              <p style={{ fontSize: "10px", color: theme.textSecondary, fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.125rem" }}>
                Share Price
              </p>
              <p style={{ fontSize: theme.fontSize.lg, fontWeight: "bold", color: theme.text }}>
                ${parseFloat(vault.pricePerShareUsd).toLocaleString(undefined, {
                  maximumFractionDigits: 6,
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          )}
          
          {/* Performance - only show in grid if there are 2 or fewer items */}
          {!hidePerformance && (perf24h || perf7d || perf30d) && !(showTVL && vault.pricePerShareUsd) && (
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: "10px", color: theme.textSecondary, fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.125rem" }}>
                Performance
              </p>
              <div style={{ display: "flex", gap: "0.125rem", flexWrap: "nowrap", overflow: "hidden" }}>
                {perf24h && (() => {
                  const Icon = perf24h.icon
                  return (
                    <div
                      style={{
                        padding: "0.125rem",
                        borderRadius: "9999px",
                        border: `1px solid ${perf24h.isPositive ? theme.success : perf24h.isNegative ? theme.error : theme.border}`,
                        backgroundColor: perf24h.isPositive ? `${theme.success}1A` : perf24h.isNegative ? `${theme.error}1A` : theme.background,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.125rem",
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ width: "6px", height: "6px", color: perf24h.isPositive ? theme.success : perf24h.isNegative ? theme.error : theme.textSecondary }} />
                      <span style={{ fontSize: "8px", fontWeight: "bold", color: perf24h.isPositive ? theme.success : perf24h.isNegative ? theme.error : theme.textSecondary }}>
                        {perf24h.isPositive ? '+' : ''}{perf24h.value}%
                      </span>
                      <span style={{ fontSize: "7px", opacity: 0.75 }}>24h</span>
                    </div>
                  )
                })()}
                {perf7d && (() => {
                  const Icon = perf7d.icon
                  return (
                    <div
                      style={{
                        padding: "0.125rem",
                        borderRadius: "9999px",
                        border: `1px solid ${perf7d.isPositive ? theme.success : perf7d.isNegative ? theme.error : theme.border}`,
                        backgroundColor: perf7d.isPositive ? `${theme.success}1A` : perf7d.isNegative ? `${theme.error}1A` : theme.background,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.125rem",
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ width: "6px", height: "6px", color: perf7d.isPositive ? theme.success : perf7d.isNegative ? theme.error : theme.textSecondary }} />
                      <span style={{ fontSize: "8px", fontWeight: "bold", color: perf7d.isPositive ? theme.success : perf7d.isNegative ? theme.error : theme.textSecondary }}>
                        {perf7d.isPositive ? '+' : ''}{perf7d.value}%
                      </span>
                      <span style={{ fontSize: "7px", opacity: 0.75 }}>7d</span>
                    </div>
                  )
                })()}
                {perf30d && (() => {
                  const Icon = perf30d.icon
                  return (
                    <div
                      style={{
                        padding: "0.125rem",
                        borderRadius: "9999px",
                        border: `1px solid ${perf30d.isPositive ? theme.success : perf30d.isNegative ? theme.error : theme.border}`,
                        backgroundColor: perf30d.isPositive ? `${theme.success}1A` : perf30d.isNegative ? `${theme.error}1A` : theme.background,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.125rem",
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ width: "6px", height: "6px", color: perf30d.isPositive ? theme.success : perf30d.isNegative ? theme.error : theme.textSecondary }} />
                      <span style={{ fontSize: "8px", fontWeight: "bold", color: perf30d.isPositive ? theme.success : perf30d.isNegative ? theme.error : theme.textSecondary }}>
                        {perf30d.isPositive ? '+' : ''}{perf30d.value}%
                      </span>
                      <span style={{ fontSize: "7px", opacity: 0.75 }}>30d</span>
                    </div>
                  )
                })()}
              </div>
            </div>
          )}
        </div>
        
        {/* Performance on separate row if there are 3 items (TVL + Share Price + Performance) */}
        {!hidePerformance && (perf24h || perf7d || perf30d) && showTVL && vault.pricePerShareUsd && (
          <div>
            <p style={{ fontSize: "10px", color: theme.textSecondary, fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.125rem" }}>
              Performance
            </p>
            <div style={{ display: "flex", gap: "0.125rem", flexWrap: "nowrap", overflow: "hidden" }}>
              {perf24h && (() => {
                const Icon = perf24h.icon
                return (
                  <div
                    style={{
                      padding: "0.125rem",
                      borderRadius: "9999px",
                      border: `1px solid ${perf24h.isPositive ? theme.success : perf24h.isNegative ? theme.error : theme.border}`,
                      backgroundColor: perf24h.isPositive ? `${theme.success}1A` : perf24h.isNegative ? `${theme.error}1A` : theme.background,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.125rem",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: "6px", height: "6px", color: perf24h.isPositive ? theme.success : perf24h.isNegative ? theme.error : theme.textSecondary }} />
                    <span style={{ fontSize: "8px", fontWeight: "bold", color: perf24h.isPositive ? theme.success : perf24h.isNegative ? theme.error : theme.textSecondary }}>
                      {perf24h.isPositive ? '+' : ''}{perf24h.value}%
                    </span>
                    <span style={{ fontSize: "7px", opacity: 0.75 }}>24h</span>
                  </div>
                )
              })()}
              {perf7d && (() => {
                const Icon = perf7d.icon
                return (
                  <div
                    style={{
                      padding: "0.125rem",
                      borderRadius: "9999px",
                      border: `1px solid ${perf7d.isPositive ? theme.success : perf7d.isNegative ? theme.error : theme.border}`,
                      backgroundColor: perf7d.isPositive ? `${theme.success}1A` : perf7d.isNegative ? `${theme.error}1A` : theme.background,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.125rem",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: "6px", height: "6px", color: perf7d.isPositive ? theme.success : perf7d.isNegative ? theme.error : theme.textSecondary }} />
                    <span style={{ fontSize: "8px", fontWeight: "bold", color: perf7d.isPositive ? theme.success : perf7d.isNegative ? theme.error : theme.textSecondary }}>
                      {perf7d.isPositive ? '+' : ''}{perf7d.value}%
                    </span>
                    <span style={{ fontSize: "7px", opacity: 0.75 }}>7d</span>
                  </div>
                )
              })()}
              {perf30d && (() => {
                const Icon = perf30d.icon
                return (
                  <div
                    style={{
                      padding: "0.125rem",
                      borderRadius: "9999px",
                      border: `1px solid ${perf30d.isPositive ? theme.success : perf30d.isNegative ? theme.error : theme.border}`,
                      backgroundColor: perf30d.isPositive ? `${theme.success}1A` : perf30d.isNegative ? `${theme.error}1A` : theme.background,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.125rem",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: "6px", height: "6px", color: perf30d.isPositive ? theme.success : perf30d.isNegative ? theme.error : theme.textSecondary }} />
                    <span style={{ fontSize: "8px", fontWeight: "bold", color: perf30d.isPositive ? theme.success : perf30d.isNegative ? theme.error : theme.textSecondary }}>
                      {perf30d.isPositive ? '+' : ''}{perf30d.value}%
                    </span>
                    <span style={{ fontSize: "7px", opacity: 0.75 }}>30d</span>
                  </div>
                )
              })()}
            </div>
          </div>
        )}
        
        {/* Token List */}
        {showTokenChips && enrichedTokens && enrichedTokens.length > 0 && (
          <div className="space-y-1.5">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
              Tokens ({enrichedTokens.length})
            </p>
            <div className="flex flex-wrap gap-1.5">
              {enrichedTokens.map((token, idx) => (
                <Badge
                  key={`${token.address}-${idx}`}
                  variant="secondary"
                  className="flex items-center gap-1.5 px-2 py-0.5 text-xs hover:bg-accent/80 transition-colors"
                  title={token.name || token.symbol}
                >
                  {(token as any).logoUrl ? (
                    <img
                      src={(token as any).logoUrl}
                      alt={token.symbol || "Token"}
                      className="w-4 h-4 rounded-full flex-shrink-0 object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-[9px] font-bold text-muted-foreground">
                        {token.symbol?.charAt(0)?.toUpperCase() || "?"}
                      </span>
                    </div>
                  )}
                  <span className="font-semibold text-xs">{token.symbol || "Unknown"}</span>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Aqua Pairs */}
        {showAquaPairs && vault.aquaPairs && vault.aquaPairs.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
            <p style={{ fontSize: "10px", color: theme.textSecondary, fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Aqua Pairs ({vault.aquaPairs.length})
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
              {vault.aquaPairs.map((pair) => {
                // Get token info using same approach as Vaults page
                const token0AddressLower = pair.token0.toLowerCase()
                const token1AddressLower = pair.token1.toLowerCase()
                
                // Try whitelisted first
                const token0FromList = tokenlistMap.get(token0AddressLower)
                const token1FromList = tokenlistMap.get(token1AddressLower)
                
                // Try to find in enrichedTokens
                const token0Enriched = enrichedTokens.find(t => t.address.toLowerCase() === token0AddressLower)
                const token1Enriched = enrichedTokens.find(t => t.address.toLowerCase() === token1AddressLower)
                
                const token0Info = token0FromList || (token0Enriched as any)
                const token1Info = token1FromList || (token1Enriched as any)
                
                const token0 = (token0Info as any) || {
                  address: pair.token0,
                  symbol: pair.token0.slice(0, 6),
                  logoUrl: "",
                }
                const token1 = (token1Info as any) || {
                  address: pair.token1,
                  symbol: pair.token1.slice(0, 6),
                  logoUrl: "",
                }
                
                return (
                  <div
                    key={pair.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      padding: "0.125rem 0.375rem",
                      fontSize: theme.fontSize.xs,
                      backgroundColor: theme.background,
                      border: `1px solid ${theme.border}`,
                      borderRadius: "0.375rem",
                      color: theme.text,
                    }}
                    title={`Fee: ${parseFloat(pair.feeBps) / 100}%`}
                  >
                    {(token0 as any)?.logoUrl ? (
                      <img
                        src={(token0 as any).logoUrl}
                        alt={token0.symbol || 'Token 0'}
                        style={{ width: "12px", height: "12px", borderRadius: "50%", flexShrink: 0, objectFit: "cover" }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: theme.background, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: "7px", fontWeight: "bold", color: theme.textSecondary }}>?</span>
                      </div>
                    )}
                    <span style={{ fontWeight: "500", fontSize: theme.fontSize.xs }}>{token0?.symbol || pair.token0.slice(0, 6)}</span>
                    <span style={{ color: theme.textSecondary, fontSize: "10px" }}>/</span>
                    {(token1 as any)?.logoUrl ? (
                      <img
                        src={(token1 as any).logoUrl}
                        alt={token1.symbol || 'Token 1'}
                        style={{ width: "12px", height: "12px", borderRadius: "50%", flexShrink: 0, objectFit: "cover" }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: theme.background, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: "7px", fontWeight: "bold", color: theme.textSecondary }}>?</span>
                      </div>
                    )}
                    <span style={{ fontWeight: "500", fontSize: theme.fontSize.xs }}>{token1?.symbol || pair.token1.slice(0, 6)}</span>
                    <span style={{ fontSize: "8px", color: theme.textSecondary, marginLeft: "0.125rem" }}>
                      ({parseFloat(pair.feeBps) / 100}%)
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
