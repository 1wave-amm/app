import { VaultWidgetTheme } from "./theme"
import { Deposit } from "@/components/vault/Deposit"
import { Withdraw } from "@/components/vault/Withdraw"
import { useQuery } from "@tanstack/react-query"
import { fetchVaultByAddressWithFallback, AggregatedVault } from "@/services/vaultService"
import { Skeleton } from "@/components/ui/skeleton"
import { FactorTokenlist } from "@factordao/tokenlist"
import { useMemo } from "react"

interface DepositWithdrawCardProps {
  vaultAddress: string
  activeTab: "deposit" | "withdraw"
  onTabChange: (tab: "deposit" | "withdraw") => void
  showDeposit: boolean
  showWithdraw: boolean
  theme: VaultWidgetTheme
  customLabels?: {
    depositLabel?: string
    withdrawLabel?: string
    [key: string]: string | undefined
  }
}

export function DepositWithdrawCard({
  vaultAddress,
  activeTab,
  onTabChange,
  showDeposit,
  showWithdraw,
  theme,
  customLabels,
}: DepositWithdrawCardProps) {
  const normalizedVaultAddress = vaultAddress?.toLowerCase().trim()
  const { data: vault, isLoading } = useQuery<AggregatedVault | null>({
    queryKey: ["vault", normalizedVaultAddress],
    queryFn: () => fetchVaultByAddressWithFallback(normalizedVaultAddress),
    retry: 2,
  })

  const tokenlistChainId = vault?.chainId ?? 8453

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
        console.log("[VaultWidget] tokenlist loaded (deposit/withdraw)", {
          chainId: tokenlistChainId,
          totalTokens: allTokens.length,
          withLogo: allTokens.filter((t: any) => !!t?.logoUrl).length,
          sample,
        })
      }
      return map
    } catch {
      if (import.meta.env.DEV) {
        console.log("[VaultWidget] tokenlist load failed (deposit/withdraw)", { chainId: tokenlistChainId })
      }
      return new Map<string, { symbol: string; name: string; logoUrl: string; decimals: number }>()
    }
  }, [tokenlistChainId])

  // Enrich tokens with logos/symbols like /vault page
  const enrichedTokens = useMemo(() => {
    if (!vault?.tokens || vault.tokens.length === 0) return []

    try {
      return vault.tokens.map((token) => {
        const addressLower = token.address?.toLowerCase()
        const tokenlistToken = addressLower ? tokenlistMap.get(addressLower) : undefined

        if (tokenlistToken) {
          return {
            ...token,
            symbol: tokenlistToken.symbol || token.symbol,
            name: tokenlistToken.name || token.name,
            logoUrl: tokenlistToken.logoUrl,
            logoURI: tokenlistToken.logoUrl,
            decimals: tokenlistToken.decimals ?? token.decimals ?? 18,
          }
        }

        return token
      })
    } catch {
      return vault.tokens
    }
  }, [vault?.tokens, tokenlistMap])

  if (import.meta.env.DEV) {
    const resolved = (vault?.tokens || []).map((t: any) => {
      const info = t?.address ? tokenlistMap.get(t.address.toLowerCase()) : undefined
      return {
        address: t?.address,
        symbol: t?.symbol,
        logoUrl: info?.logoUrl,
      }
    })
    console.log("[VaultWidget] deposit/withdraw token logos", {
      vaultAddress: normalizedVaultAddress,
      tokenCount: vault?.tokens?.length || 0,
      logosFound: resolved.filter((t) => !!t.logoUrl).length,
      resolved,
    })
  }

  if (isLoading || !vault) {
    return (
      <div
        style={{
          backgroundColor: theme.cardBackground,
          border: `1px solid ${theme.border}`,
          borderRadius: theme.borderRadius,
          padding: theme.padding,
        }}
      >
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-20 w-full" />
      </div>
    )
  }

  const vaultData = {
    address: vault.address,
    name: vault.name,
    chainId: 8453,
    metadata: {
      symbol: vault.metadata?.symbol,
      assetDenominatorAddress: vault.metadata?.assetDenominatorAddress,
    },
    tokens: enrichedTokens,
    pricePerShareUsd: vault.pricePerShareUsd,
  }

  const availableTokens = enrichedTokens || []

  return (
    <div
      style={{
        backgroundColor: theme.cardBackground,
        border: `1px solid ${theme.border}`,
        borderRadius: theme.borderRadius,
        padding: theme.padding,
      }}
    >
      {/* Tabs */}
      {(showDeposit && showWithdraw) && (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1rem",
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          {showDeposit && (
            <button
              onClick={() => onTabChange("deposit")}
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                background: "transparent",
                color: activeTab === "deposit" ? theme.primary : theme.textSecondary,
                borderBottom: activeTab === "deposit" ? `2px solid ${theme.primary}` : "2px solid transparent",
                cursor: "pointer",
                fontSize: theme.fontSize.sm,
                fontWeight: activeTab === "deposit" ? "600" : "400",
                transition: "all 0.2s",
              }}
            >
              {customLabels?.depositLabel || "Deposit"}
            </button>
          )}
          {showWithdraw && (
            <button
              onClick={() => onTabChange("withdraw")}
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                background: "transparent",
                color: activeTab === "withdraw" ? theme.primary : theme.textSecondary,
                borderBottom: activeTab === "withdraw" ? `2px solid ${theme.primary}` : "2px solid transparent",
                cursor: "pointer",
                fontSize: theme.fontSize.sm,
                fontWeight: activeTab === "withdraw" ? "600" : "400",
                transition: "all 0.2s",
              }}
            >
              {customLabels?.withdrawLabel || "Withdraw"}
            </button>
          )}
        </div>
      )}

      {/* Content */}
      <div style={{ color: theme.text }}>
        {activeTab === "deposit" && showDeposit && (
          <Deposit vault={vaultData} availableTokens={availableTokens} />
        )}
        {activeTab === "withdraw" && showWithdraw && (
          <Withdraw vault={vaultData} availableTokens={availableTokens} />
        )}
      </div>
    </div>
  )
}
