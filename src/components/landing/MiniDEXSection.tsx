import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/atomic/Container"
import { TrendingUp, Network, Shield } from "lucide-react"

export function MiniDEXSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 w-full">
      <Container maxWidth="full" className="w-full">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 xl:gap-32 items-start w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Card variant="glass-strong" className="p-10 sm:p-12 md:p-16">
            <CardHeader className="p-0 pb-8">
              <CardTitle className="text-2xl sm:text-3xl mb-3">Mini-DEX Aggregator</CardTitle>
              <CardDescription className="text-base">Frontend + Smart Contract Wrapper</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The frontend aggregates all permissionless vaults into a unified swap interface. Each vault 
                exposes its own mini-DEX through the swap adapter, enabling users to trade against vault liquidity 
                while benefiting from rebalanced, IL-minimized positions.
              </p>
              
              <div className="space-y-4 pt-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">swapExactIn() / swapExactOut()</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Standard AMM interface functions that route swaps through vault strategies. Price simulation 
                    uses current virtual balances and oracle prices to estimate output amounts before execution.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Route Discovery</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Frontend queries all vaults to find best swap routes. Can aggregate liquidity across multiple 
                    vaults for large swaps, similar to 1inch aggregation but using vault strategies as sources.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8 sm:space-y-10">
            <h3 className="text-3xl sm:text-4xl font-bold">Key Features</h3>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-aqua-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Real-Time Price Simulation</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    UI displays estimated swap outputs using Aqua SDK simulation functions. Prices update in real-time 
                    as virtual balances change, providing accurate previews before transaction execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Network className="w-6 h-6 text-aqua-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Multi-Vault Aggregation</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Large swaps can be split across multiple vaults to maximize liquidity and minimize price impact. 
                    The aggregator finds optimal route combinations using graph algorithms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-aqua-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Slippage Protection</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Configurable slippage tolerance with transaction revert on price deviation. Rebalancing ensures 
                    vaults maintain tight spreads, reducing slippage compared to traditional AMM pools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

