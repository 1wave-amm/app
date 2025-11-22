import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/atomic/Container"
import { Layers, Network, BarChart3, Zap } from "lucide-react"

export function BasketVaultsSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-aqua-500/5 w-full">
      <Container maxWidth="full" className="w-full">
        <div className="text-center mb-16 sm:mb-20 md:mb-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Badge variant="outline" className="glass-apple mb-6">
            <Layers className="w-3 h-3 mr-1" />
            Multi-Asset Portfolio Management
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 w-full">
            Permissionless Basket Asset Vaults
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto w-full">
            Create composable multi-token vaults with configurable target weights, fee structures, 
            and rebalancing strategies. Each vault operates as an independent liquidity pool with 
            its own mini-DEX interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Card variant="glass" className="border-aqua-500/20">
            <CardHeader className="p-8">
              <div className="w-16 h-16 rounded-lg bg-aqua-500/10 flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-aqua-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-3">Virtual Liquidity via Aqua</CardTitle>
              <CardDescription className="text-base">
                Leverage 1inch Aqua Protocol's shared liquidity layer
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Assets remain in user wallets while virtual balances enable multiple strategies 
                to share the same capital. This non-custodial architecture provides up to 9x 
                capital amplification through shared liquidity pools.
              </p>
              <div className="pt-6 border-t border-white/10">
                <code className="text-xs text-aqua-500 font-mono break-all">
                  mapping(address → mapping(address → mapping(bytes32 → Balance)))
                </code>
              </div>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-aqua-500/20">
            <CardHeader className="p-8">
              <div className="w-16 h-16 rounded-lg bg-aqua-500/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-aqua-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-3">Target Weight Configuration</CardTitle>
              <CardDescription className="text-base">
                Define precise asset allocation targets
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Configure target weights for each asset in the basket (e.g., 30% BTC, 30% ETH, 40% USDC). 
                The rebalancing adapter monitors deviations and executes swaps to maintain these ratios, 
                ensuring delta-neutral exposure.
              </p>
              <div className="pt-6 border-t border-white/10">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">BTC</span>
                    <span className="font-mono font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ETH</span>
                    <span className="font-mono font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">USDC</span>
                    <span className="font-mono font-semibold">40%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-aqua-500/20">
            <CardHeader className="p-8">
              <div className="w-16 h-16 rounded-lg bg-aqua-500/10 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-aqua-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-3">Pluggable Adapter System</CardTitle>
              <CardDescription className="text-base">
                Composable rebalancing strategies
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Rebalancing adapters are smart contracts that define swap execution logic. They can be 
                triggered on-demand, periodically, or based on threshold deviations. Each adapter uses 
                Vault allowances to execute swaps across external DEX aggregators.
              </p>
              <div className="pt-6 border-t border-white/10">
                <Badge variant="outline" className="text-sm">
                  Permissionless Execution
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

