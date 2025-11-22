import { useParams } from "react-router-dom"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useQuery } from "@tanstack/react-query"
import { VaultActions } from "@/components/vault/VaultActions"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const STATS_API_BASE_URL = import.meta.env.VITE_STATS_API_BASE_URL || ""

interface VaultDetail {
  address: string
  name: string
  chainId: number
  tvl?: string
  apy?: number
  tokens?: Array<{
    address: string
    symbol: string
    name: string
    logoURI?: string
    decimals: number
    isDepositAsset?: boolean
    isWithdrawAsset?: boolean
  }>
  description?: string
}

async function fetchVaultDetail(address: string): Promise<VaultDetail | null> {
  if (!STATS_API_BASE_URL) {
    console.warn("VITE_STATS_API_BASE_URL not set")
    return null
  }

  try {
    const response = await fetch(`${STATS_API_BASE_URL}/strategies/${address}`)
    const data = await response.json()
    
    return {
      address: data.address || address,
      name: data.name,
      chainId: data.chainId || 42161,
      tvl: data.tvl,
      apy: data.apy,
      tokens: data.tokens || [],
      description: data.description,
    }
  } catch (error) {
    console.error("Error fetching vault detail:", error)
    return null
  }
}

export function VaultDetail() {
  const { address } = useParams<{ address: string }>()
  const [activeTab, setActiveTab] = useState<"deposit" | "withdraw">("deposit")

  const { data: vault, isLoading } = useQuery({
    queryKey: ["vault", address],
    queryFn: () => fetchVaultDetail(address!),
    enabled: !!address,
  })

  if (isLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-12 w-64" />
        <Card variant="glass-apple">
          <CardContent className="p-6">
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!vault) {
    return (
      <div className="space-y-8">
        <Card variant="glass-apple" className="text-center p-8">
          <p className="text-muted-foreground">Vault not found</p>
          <Link to="/vaults">
            <Button variant="glass-apple" className="mt-4">
              Back to Vaults
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  const depositTokens = vault.tokens?.filter((t) => t.isDepositAsset) || []
  const withdrawTokens = vault.tokens?.filter((t) => t.isWithdrawAsset) || []

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/vaults">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-foreground">{vault.name}</h1>
          <p className="text-muted-foreground mt-1">
            {vault.address.slice(0, 6)}...{vault.address.slice(-4)}
          </p>
        </div>
      </div>

      {/* Vault Info */}
      <Card variant="glass-apple">
        <CardHeader>
          <CardTitle>Vault Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">TVL</p>
              <p className="text-2xl font-bold">
                {vault.tvl ? `$${parseFloat(vault.tvl).toLocaleString()}` : "N/A"}
              </p>
            </div>
            {vault.apy && (
              <div>
                <p className="text-sm text-muted-foreground">APY</p>
                <p className="text-2xl font-bold text-green-500">
                  {vault.apy.toFixed(2)}%
                </p>
              </div>
            )}
          </div>

          {vault.description && (
            <div>
              <p className="text-sm text-muted-foreground mb-1">Description</p>
              <p className="text-sm">{vault.description}</p>
            </div>
          )}

          {vault.tokens && vault.tokens.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Supported Tokens</p>
              <div className="flex flex-wrap gap-2">
                {vault.tokens.map((token, idx) => (
                  <Badge key={idx} variant="secondary" className="glass">
                    {token.logoURI && (
                      <img
                        src={token.logoURI}
                        alt={token.symbol}
                        className="w-4 h-4 rounded-full mr-1"
                      />
                    )}
                    {token.symbol}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Deposit/Withdraw Actions */}
      <Card variant="glass-apple">
        <CardHeader>
          <CardTitle>Manage Position</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
            <TabsList className="glass mb-4">
              <TabsTrigger value="deposit">Deposit</TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            </TabsList>
            <TabsContent value="deposit">
              <VaultActions
                vault={vault}
                mode="deposit"
                availableTokens={depositTokens}
              />
            </TabsContent>
            <TabsContent value="withdraw">
              <VaultActions
                vault={vault}
                mode="withdraw"
                availableTokens={withdrawTokens}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

