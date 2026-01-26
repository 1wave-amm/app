import { ReactNode, useMemo } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import { base } from "wagmi/chains"
import { http } from "viem"
import { VaultWidget, VaultWidgetConfig } from "./VaultWidget"

export type WalletMode = "external" | "internal"

interface EmbeddableProvidersProps {
  walletMode: WalletMode
  projectId?: string
  rpcUrl?: string
  wagmiConfig?: ReturnType<typeof getDefaultConfig>
  queryClient?: QueryClient
  children: ReactNode
}

function EmbeddableProviders({
  walletMode,
  projectId,
  rpcUrl,
  wagmiConfig,
  queryClient,
  children,
}: EmbeddableProvidersProps) {
  if (walletMode === "external") {
    return <>{children}</>
  }

  const resolvedProjectId = projectId || "YOUR_PROJECT_ID"
  const resolvedRpcUrl = rpcUrl || "https://mainnet.base.org"

  const internalWagmiConfig = useMemo(
    () =>
      wagmiConfig ||
      getDefaultConfig({
        appName: "Vault Widget",
        projectId: resolvedProjectId,
        chains: [base],
        transports: {
          [base.id]: http(resolvedRpcUrl),
        },
      }),
    [wagmiConfig, resolvedProjectId, resolvedRpcUrl]
  )

  const internalQueryClient = useMemo(
    () => queryClient || new QueryClient(),
    [queryClient]
  )

  if (!projectId) {
    console.warn(
      "[VaultWidget] walletMode=internal requires a WalletConnect projectId."
    )
  }

  return (
    <WagmiProvider config={internalWagmiConfig}>
      <QueryClientProvider client={internalQueryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export interface VaultWidgetEmbedProps {
  config: VaultWidgetConfig
  walletMode?: WalletMode
  projectId?: string
  rpcUrl?: string
  wagmiConfig?: ReturnType<typeof getDefaultConfig>
  queryClient?: QueryClient
}

export function VaultWidgetEmbed({
  config,
  walletMode = "external",
  projectId,
  rpcUrl,
  wagmiConfig,
  queryClient,
}: VaultWidgetEmbedProps) {
  return (
    <EmbeddableProviders
      walletMode={walletMode}
      projectId={projectId}
      rpcUrl={rpcUrl}
      wagmiConfig={wagmiConfig}
      queryClient={queryClient}
    >
      <VaultWidget config={config} />
    </EmbeddableProviders>
  )
}
