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
import { fetchVaultByAddress, AggregatedVault } from "@/services/vaultService"
import { useVaultUserShares } from "@/hooks/useVaultUserShares"
import { Address } from "viem"

const STATS_API_BASE_URL = import.meta.env.VITE_STATS_API_BASE_URL || ""

interface VaultDetail extends AggregatedVault {
  tokens?: Array<{
    address: string
    symbol: string
    name: string
    logoURI?: string
    decimals: number
    isDepositAsset?: boolean
    isWithdrawAsset?: boolean
  }>
}

async function fetchVaultDetail(address: string): Promise<VaultDetail | null> {
  if (!STATS_API_BASE_URL) {
    console.warn("VITE_STATS_API_BASE_URL not set")
    return null
  }

  try {
    // Try to fetch from aggregated service first
    const aggregatedVault = await fetchVaultByAddress(address)
    if (aggregatedVault) {
      // Transform to VaultDetail format
      const depositTokens = aggregatedVault.depositTokens || aggregatedVault.tokens || []
      const withdrawTokens = aggregatedVault.withdrawTokens || aggregatedVault.tokens || []
      
      return {
        ...aggregatedVault,
        tokens: aggregatedVault.tokens?.map(token => ({
          address: token.address,
          symbol: token.symbol,
          name: token.name,
          logoURI: token.logoUrl,
          decimals: token.decimals,
          isDepositAsset: depositTokens.some(t => t.address.toLowerCase() === token.address.toLowerCase()),
          isWithdrawAsset: withdrawTokens.some(t => t.address.toLowerCase() === token.address.toLowerCase()),
        })) || [],
      }
    }

    // Fallback to direct API call
    const response = await fetch(`${STATS_API_BASE_URL}/strategies/${address}`)
    const data = await response.json()
    
    return {
      address: data.address || address,
      name: data.name,
      chainId: data.chainId || 8453,
      tvl: data.tvl || data.tvlUsd,
      apy: data.apy || data.calculated_apy,
      tokens: data.tokens || [],
      description: data.description,
      pricePerShareUsd: data.pricePerShareUsd,
      performance24h: data.performance24h,
      performance7d: data.performance7d,
      performance30d: data.performance30d,
      performance90d: data.performance90d,
      vaultAnalytics: data.vaultAnalytics,
      protocols: data.protocols,
      depositStrategy: data.depositStrategy,
      balances: data.balances,
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

  // Fetch user shares
  const { userShares } = useVaultUserShares({
    vaultAddress: vault?.address as Address,
    chainId: vault?.chainId,
    pricePerShareUsd: vault?.pricePerShareUsd,
    denominatorAddress: vault?.metadata?.assetDenominatorAddress as Address,
  })

  // Merge user shares into vault data
  const vaultWithShares = vault
    ? {
        ...vault,
        userShares,
      }
    : null

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
      <div className="flex items-center justify-between gap-4">
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
        <Button
          variant="glass-apple"
          className="rounded-full"
          onClick={() => {
            // TODO: Implement rebalance pairs price functionality
            console.log("Rebalance Pairs Price clicked")
          }}
        >
          Rebalance Pairs Price
        </Button>
      </div>

      {/* Vault Info */}
      <Card variant="glass-apple">
        <CardHeader>
          <CardTitle>Vault Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">TVL</p>
              <p className="text-2xl font-bold">
                {vault.tvlUsd ? `$${parseFloat(vault.tvlUsd).toLocaleString()}` : "N/A"}
              </p>
            </div>
            {vault.apy !== undefined && (
              <div>
                <p className="text-sm text-muted-foreground">APY</p>
                <p className="text-2xl font-bold text-green-500">
                  {vault.apy.toFixed(2)}%
                </p>
              </div>
            )}
            {vault.pricePerShareUsd && (
              <div>
                <p className="text-sm text-muted-foreground">Share Price</p>
                <p className="text-2xl font-bold">
                  ${parseFloat(vault.pricePerShareUsd).toFixed(6)}
                </p>
              </div>
            )}
            {vault.performance7d && (
              <div>
                <p className="text-sm text-muted-foreground">7D Performance</p>
                <p className={`text-2xl font-bold ${
                  vault.performance7d.pnl?.startsWith('-') ? 'text-red-500' : 'text-green-500'
                }`}>
                  {vault.performance7d.pnl || '0%'}
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

          {vault.protocols && vault.protocols.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Protocols ({vault.protocols.length})</p>
              <div className="flex flex-wrap gap-2">
                {vault.protocols.map((protocol, idx) => (
                  <Badge key={idx} variant="secondary" className="glass">
                    {protocol}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {vault.tokens && vault.tokens.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Supported Tokens ({vault.tokens.length})</p>
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
                vault={vaultWithShares || vault}
                mode="deposit"
                availableTokens={depositTokens}
              />
            </TabsContent>
            <TabsContent value="withdraw">
              <VaultActions
                vault={vaultWithShares || vault}
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

