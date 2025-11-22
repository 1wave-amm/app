import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useQuery } from "@tanstack/react-query"

const VAULT_NAME_PREFIX = "ethGlobal - wave: "
const STATS_API_BASE_URL = import.meta.env.VITE_STATS_API_BASE_URL || ""

interface Vault {
  address: string
  name: string
  chainId: number
  tvl?: string
  apy?: number
  tokens?: Array<{ symbol: string; logoURI?: string }>
}

async function fetchVaults(): Promise<Vault[]> {
  if (!STATS_API_BASE_URL) {
    console.warn("VITE_STATS_API_BASE_URL not set")
    return []
  }

  try {
    const response = await fetch(`${STATS_API_BASE_URL}/strategies`)
    const data = await response.json()
    
    // Filter only vaults that start with the prefix
    const filtered = (data || []).filter((vault: any) =>
      vault.name?.startsWith(VAULT_NAME_PREFIX)
    )
    
    return filtered.map((vault: any) => ({
      address: vault.address || vault.vaultAddress,
      name: vault.name,
      chainId: vault.chainId || 42161,
      tvl: vault.tvl,
      apy: vault.apy,
      tokens: vault.tokens || [],
    }))
  } catch (error) {
    console.error("Error fetching vaults:", error)
    return []
  }
}

export function Vaults() {
  const [search, setSearch] = useState("")

  const { data: vaults, isLoading } = useQuery({
    queryKey: ["vaults"],
    queryFn: fetchVaults,
  })

  const filteredVaults = useMemo(() => {
    if (!vaults) return []
    if (!search) return vaults
    return vaults.filter((vault) =>
      vault.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [vaults, search])

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVaults.map((vault) => (
            <Link key={vault.address} to={`/vaults/${vault.address}`}>
              <Card variant="glass-apple" className="glass-hover h-full">
                <CardHeader>
                  <CardTitle className="line-clamp-1">{vault.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">TVL</p>
                      <p className="text-xl font-bold">
                        {vault.tvl ? `$${parseFloat(vault.tvl).toLocaleString()}` : "N/A"}
                      </p>
                    </div>
                    {vault.apy && (
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">APY</p>
                        <p className="text-xl font-bold text-green-500">
                          {vault.apy.toFixed(2)}%
                        </p>
                      </div>
                    )}
                  </div>
                  {vault.tokens && vault.tokens.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {vault.tokens.slice(0, 3).map((token, idx) => (
                        <Badge key={idx} variant="secondary">
                          {token.symbol}
                        </Badge>
                      ))}
                      {vault.tokens.length > 3 && (
                        <Badge variant="outline">+{vault.tokens.length - 3}</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="glass-apple" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

