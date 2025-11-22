import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/atomic/Container"
import { Shield } from "lucide-react"

export function ImpermanentLossSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 w-full">
      <Container maxWidth="full" className="w-full">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 xl:gap-32 items-start w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="space-y-8 sm:space-y-10">
            <Badge variant="outline" className="glass-apple">
              <Shield className="w-3 h-3 mr-1" />
              Delta-Neutral Architecture
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Eliminate Impermanent Loss Through
              <span className="text-aqua-500 block mt-2">Continuous Rebalancing</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Traditional AMM liquidity pools suffer from impermanent loss (IL) due to price divergence 
              between deposited assets. Wave's basket asset vaults implement <strong>real-time on-chain rebalancing</strong> 
              that maintains target weight allocations through oracle-driven price feeds, effectively neutralizing 
              IL exposure through dynamic position management.
            </p>
          </div>

          <Card variant="glass-strong" className="p-8 sm:p-10 md:p-12">
            <CardHeader className="p-0 pb-8">
              <CardTitle className="text-2xl sm:text-3xl mb-3">IL Mitigation Comparison</CardTitle>
              <CardDescription className="text-base">
                Traditional AMM vs Wave Basket Vaults
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <span className="font-medium text-base">Uniswap V2/V3 LP</span>
                  <Badge variant="destructive">2-5% IL (typical)</Badge>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-aqua-500/10 border border-primary/20">
                  <span className="font-medium text-base">Wave Basket Vault</span>
                  <Badge className="bg-primary">~0% IL</Badge>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground block mb-2">Key Difference:</strong>
                  Wave continuously adjusts asset ratios to maintain target weights, preventing price divergence from accumulating 
                  into impermanent loss. The rebalancing mechanism operates on-chain through Aqua Protocol's 
                  virtual balance system, enabling capital-efficient position management without requiring 
                  full asset custody.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

