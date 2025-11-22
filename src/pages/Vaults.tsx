import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useQuery } from "@tanstack/react-query"
import { fetchAggregatedVaults, AggregatedVault } from "@/services/vaultService"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { BASE_WHITELISTED_TOKENS, getBaseTokenByAddress } from "@/lib/constants/baseTokens"
import { FactorTokenlist } from "@factordao/tokenlist"
import { useAccount } from "wagmi"

// Format performance percentage with icon
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
    color: isPositive ? "text-green-500" : isNegative ? "text-red-500" : "text-muted-foreground",
  }
}

export function Vaults() {
  const [search, setSearch] = useState("")
  const { chainId = 8453 } = useAccount()

  const { data: vaults, isLoading } = useQuery<AggregatedVault[]>({
    queryKey: ["vaults"],
    queryFn: fetchAggregatedVaults,
  })

  // Get whitelisted tokens with logos from FactorTokenlist
  const whitelistedTokensMap = useMemo(() => {
    try {
      const tokenlist = new FactorTokenlist(chainId as any)
      const allTokens = tokenlist.getAllGeneralTokens()
      const map = new Map<string, { symbol: string; name: string; logoUrl: string; address: string }>()
      
      BASE_WHITELISTED_TOKENS.forEach((baseToken) => {
        const tokenlistToken = allTokens.find((t: any) => 
          t.address?.toLowerCase() === baseToken.address.toLowerCase()
        )
        
        map.set(baseToken.address.toLowerCase(), {
          symbol: tokenlistToken?.symbol || baseToken.symbol,
          name: tokenlistToken?.name || baseToken.name,
          logoUrl: tokenlistToken?.logoUrl || tokenlistToken?.logoURI || baseToken.logoURI || '',
          address: baseToken.address,
        })
      })
      
      return map
    } catch (error) {
      console.error('[Vaults] Error loading tokenlist:', error)
      // Fallback to base tokens only
      const map = new Map<string, { symbol: string; name: string; logoUrl: string; address: string }>()
      BASE_WHITELISTED_TOKENS.forEach((token) => {
        map.set(token.address.toLowerCase(), {
          symbol: token.symbol,
          name: token.name,
          logoUrl: token.logoURI || '',
          address: token.address,
        })
      })
      return map
    }
  }, [chainId])

  // Enrich vault tokens with logos from FactorTokenlist (show all tokens, but prioritize whitelisted)
  const enrichedVaults = useMemo(() => {
    if (!vaults) return []
    
    return vaults.map((vault) => {
      if (!vault.tokens || vault.tokens.length === 0) {
        return vault
      }
      
      // Enrich all tokens with logos from whitelistedTokensMap or FactorTokenlist
      const enrichedTokens = vault.tokens.map((token) => {
        const addressLower = token.address?.toLowerCase()
        const whitelistedToken = whitelistedTokensMap.get(addressLower)
        
        // If token is whitelisted, use whitelisted data (preferred)
        if (whitelistedToken) {
          return {
            ...token,
            symbol: whitelistedToken.symbol || token.symbol,
            name: whitelistedToken.name || token.name,
            logoUrl: whitelistedToken.logoUrl || token.logoUrl,
          }
        }
        
        // If not whitelisted but has logoUrl, keep it
        if (token.logoUrl) {
          return token
        }
        
        // Try to get from FactorTokenlist for non-whitelisted tokens
        try {
          const tokenlist = new FactorTokenlist(chainId as any)
          const allTokens = tokenlist.getAllGeneralTokens()
          const tokenlistToken = allTokens.find((t: any) => 
            t.address?.toLowerCase() === addressLower
          )
          
          if (tokenlistToken) {
            return {
              ...token,
              symbol: tokenlistToken.symbol || token.symbol,
              name: tokenlistToken.name || token.name,
              logoUrl: tokenlistToken.logoUrl || tokenlistToken.logoURI || token.logoUrl,
            }
          }
        } catch (error) {
          // Silently fail
        }
        
        return token
      })
      
      // Filter to show only whitelisted tokens (but keep all for fallback)
      const whitelistedOnly = enrichedTokens.filter((token) => {
        const addressLower = token.address?.toLowerCase()
        return whitelistedTokensMap.has(addressLower)
      })
      
      return {
        ...vault,
        tokens: whitelistedOnly.length > 0 ? whitelistedOnly : enrichedTokens,
      }
    })
  }, [vaults, whitelistedTokensMap, chainId])

  const filteredVaults = useMemo(() => {
    if (!enrichedVaults) return []
    if (!search) return enrichedVaults
    return enrichedVaults.filter((vault) =>
      vault.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [enrichedVaults, search])

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Add Liquidity</h1>
        <p className="text-muted-foreground">
          Browse and deposit into available vaults
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <Input
          variant="glass"
          placeholder="Search vaults..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Vaults Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} variant="glass-apple">
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2 mt-2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredVaults.length === 0 ? (
        <Card variant="glass-apple" className="text-center p-8">
          <p className="text-muted-foreground">
            {search ? "No vaults found matching your search" : "No vaults available"}
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredVaults.map((vault) => {
            const displayName = vault.name.replace(/^ethGlobal - wave: /i, "")
            const perf24h = formatPerformance(vault.performance24h?.pnl)
            const perf7d = formatPerformance(vault.performance7d?.pnl)
            const perf30d = formatPerformance(vault.performance30d?.pnl)
            
            return (
              <Link key={vault.address} to={`/vaults/${vault.address}`}>
                <Card variant="glass-apple" className="glass-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardHeader className="pb-3">
                    {/* Header: Token Logos + Name */}
                    <div className="flex items-start gap-3 mb-3">
                      {/* Token Logos - Overlapping Stack */}
                      {vault.tokens && vault.tokens.length > 0 ? (
                        <div className="flex -space-x-2.5 flex-shrink-0">
                          {vault.tokens.slice(0, 4).map((token, idx) => {
                            const hasLogo = !!token.logoUrl
                            return (
                              <div
                                key={`${token.address}-${idx}`}
                                className="w-12 h-12 rounded-full overflow-hidden bg-muted border-2 border-background flex items-center justify-center relative transition-all duration-300 hover:scale-150 hover:z-20 hover:shadow-xl group"
                                style={{ zIndex: vault.tokens!.length - idx }}
                                title={`${token.symbol || 'Unknown'} - ${token.name || 'Unknown Token'}`}
                              >
                                {hasLogo ? (
                                  <img
                                    src={token.logoUrl}
                                    alt={token.symbol || 'Token'}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      const target = e.currentTarget
                                      target.style.display = 'none'
                                      const parent = target.parentElement
                                      if (parent && !parent.querySelector('span.fallback')) {
                                        const fallback = document.createElement('span')
                                        fallback.className = 'fallback text-sm font-bold text-muted-foreground'
                                        fallback.textContent = token.symbol?.charAt(0)?.toUpperCase() || '?'
                                        parent.appendChild(fallback)
                                      }
                                    }}
                                  />
                                ) : (
                                  <span className="text-sm font-bold text-muted-foreground">
                                    {token.symbol?.charAt(0)?.toUpperCase() || '?'}
                                  </span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-muted border-2 border-background flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-muted-foreground">?</span>
                        </div>
                      )}
                      
                      {/* Name and Protocols */}
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-bold line-clamp-2 mb-1.5">
                          {displayName}
                        </CardTitle>
                        {vault.protocols && vault.protocols.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {vault.protocols.slice(0, 3).map((protocol, idx) => (
                              <Badge key={idx} variant="outline" className="text-[9px] px-1.5 py-0.5 h-4">
                                {protocol}
                              </Badge>
                            ))}
                            {vault.protocols.length > 3 && (
                              <Badge variant="outline" className="text-[9px] px-1.5 py-0.5 h-4">
                                +{vault.protocols.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* TVL and APY - Horizontal Layout */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide mb-0.5">TVL</p>
                        <p className="text-xl font-bold">
                          {vault.tvlUsd ? (
                            `$${parseFloat(vault.tvlUsd).toLocaleString(undefined, { 
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 0
                            })}`
                          ) : (
                            <span className="text-muted-foreground text-base">N/A</span>
                          )}
                        </p>
                      </div>
                      {vault.apy !== undefined && (
                        <div className="text-right">
                          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide mb-0.5">APY</p>
                          <div className="flex items-center justify-end gap-1">
                            {vault.apy > 0 && <span className="text-green-500 text-sm">↑</span>}
                            {vault.apy < 0 && <span className="text-red-500 text-sm">↓</span>}
                            <p className={`text-xl font-bold ${vault.apy >= 0 ? "text-green-500" : "text-red-500"}`}>
                              {vault.apy.toFixed(2)}%
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* APY Chip - Compact */}
                    {vault.apy !== undefined && (
                      <div className="flex items-center justify-center">
                        <div className={`px-3 py-1.5 rounded-full border flex items-center gap-1.5 ${
                          vault.apy > 0 
                            ? "border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400" 
                            : vault.apy < 0
                            ? "border-red-500/50 bg-red-500/10 text-red-600 dark:text-red-400"
                            : "border-muted-foreground/30 bg-muted/50 text-foreground"
                        }`}>
                          {vault.apy > 0 && <span className="text-xs">↑</span>}
                          {vault.apy < 0 && <span className="text-xs">↓</span>}
                          <span className="text-sm font-bold">{vault.apy.toFixed(2)}%</span>
                          <span className="text-[10px] opacity-75">Strategy APY</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Performance Metrics - Compact Horizontal */}
                    {(perf24h || perf7d || perf30d) && (
                      <div className="flex items-center justify-center gap-2">
                        {perf24h && (() => {
                          const Icon = perf24h.icon
                          return (
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg border text-xs ${
                              perf24h.isPositive 
                                ? "border-green-500/30 bg-green-500/10" 
                                : perf24h.isNegative
                                ? "border-red-500/30 bg-red-500/10"
                                : "border-muted"
                            }`}>
                              <Icon className={`w-3 h-3 ${perf24h.color}`} />
                              <span className={perf24h.color}>{perf24h.value}%</span>
                              <span className="text-[9px] text-muted-foreground">24h</span>
                            </div>
                          )
                        })()}
                        {perf7d && (() => {
                          const Icon = perf7d.icon
                          return (
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg border text-xs ${
                              perf7d.isPositive 
                                ? "border-green-500/30 bg-green-500/10" 
                                : perf7d.isNegative
                                ? "border-red-500/30 bg-red-500/10"
                                : "border-muted"
                            }`}>
                              <Icon className={`w-3 h-3 ${perf7d.color}`} />
                              <span className={perf7d.color}>{perf7d.value}%</span>
                              <span className="text-[9px] text-muted-foreground">7d</span>
                            </div>
                          )
                        })()}
                        {perf30d && (() => {
                          const Icon = perf30d.icon
                          return (
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg border text-xs ${
                              perf30d.isPositive 
                                ? "border-green-500/30 bg-green-500/10" 
                                : perf30d.isNegative
                                ? "border-red-500/30 bg-red-500/10"
                                : "border-muted"
                            }`}>
                              <Icon className={`w-3 h-3 ${perf30d.color}`} />
                              <span className={perf30d.color}>{perf30d.value}%</span>
                              <span className="text-[9px] text-muted-foreground">30d</span>
                            </div>
                          )
                        })()}
                      </div>
                    )}
                    
                    {/* Token List - Compact with Logos */}
                    {vault.tokens && vault.tokens.length > 0 && (
                      <div className="space-y-1.5">
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Tokens</p>
                        <div className="flex flex-wrap gap-1.5">
                          {vault.tokens.map((token, idx) => (
                            <Badge 
                              key={`${token.address}-${idx}`} 
                              variant="secondary" 
                              className="flex items-center gap-1.5 px-2.5 py-1 text-xs hover:bg-accent/80 transition-colors"
                              title={token.name || token.symbol}
                            >
                              {token.logoUrl ? (
                                <img
                                  src={token.logoUrl}
                                  alt={token.symbol || 'Token'}
                                  className="w-5 h-5 rounded-full flex-shrink-0 object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                  }}
                                />
                              ) : (
                                <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                                  <span className="text-[10px] font-bold text-muted-foreground">
                                    {token.symbol?.charAt(0)?.toUpperCase() || '?'}
                                  </span>
                                </div>
                              )}
                              <span className="font-semibold">{token.symbol || 'Unknown'}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="pt-3 pb-4">
                    <Button variant="glass-apple" className="w-full text-sm py-5">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

