import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/atomic/Container"
import { Activity } from "lucide-react"

export function RebalancingSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-aqua-500/5 w-full">
      <Container maxWidth="full" className="w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="text-center mb-16 sm:mb-20 md:mb-24 w-full">
            <Badge variant="outline" className="glass-apple mb-6">
              <Activity className="w-3 h-3 mr-1" />
              Continuous Rebalancing
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 w-full">
              On-Chain Rebalancing Engine
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground w-full">
              Event-driven strategy recalculation with multi-step swap orchestration
            </p>
          </div>

          <Card variant="glass-strong" className="p-10 sm:p-12 md:p-16">
            <CardHeader className="p-0 pb-10">
              <CardTitle className="text-2xl sm:text-3xl">Rebalancing Flow</CardTitle>
              <CardDescription className="text-base mt-2">
                How IL is prevented through continuous adjustment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-0">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-500 font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-3 text-lg">Price Deviation Detection</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Oracle price feeds (Chainlink) provide real-time asset valuations. Current portfolio 
                      composition is calculated from Aqua virtual balances. Deviation = |Current Weight - Target Weight| 
                      for each asset. Threshold triggers rebalancing (e.g., deviation {'>'} 2%).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-500 font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-3 text-lg">Swap Sequence Calculation</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Rebalancing adapter calculates required swaps to restore target weights. For complex baskets, 
                      multiple sequential swaps may be needed (e.g., USDC → ETH → BTC). Each swap route is optimized 
                      via DEX aggregator APIs to minimize slippage and gas costs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-500 font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-3 text-lg">Execution via Aqua Protocol</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Adapter executes swaps using Vault allowances. Each swap: (1) <code className="text-xs bg-aqua-500/10 px-2 py-1 rounded">pull()</code> 
                      token output from Aqua virtual balance, (2) execute swap on external DEX, (3) <code className="text-xs bg-aqua-500/10 px-2 py-1 rounded">push()</code> 
                      token input to Aqua virtual balance. Virtual balances update atomically, maintaining consistency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-500 font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-3 text-lg">Strategy Hash Update</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      After rebalancing completes, new strategy configuration is computed with updated token amounts. 
                      New strategy hash is generated and stored. Previous strategy remains immutable for audit purposes. 
                      Portfolio composition now matches target weights, IL exposure reset to zero.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="bg-aqua-500/5 rounded-lg p-6 border border-primary/20">
                  <h4 className="font-semibold mb-3 text-aqua-500 text-lg">Gas Optimization</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Rebalancing can be executed permissionlessly by any caller. Gas costs can be offset through 
                    fee sharing mechanisms, executor rewards, or protocol incentives. Batch rebalancing across 
                    multiple vaults can be orchestrated via multicall patterns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

