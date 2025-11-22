import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/atomic/Container"

export function FeaturesChips() {
  return (
    <section className="py-12 sm:py-16 md:py-20 w-full">
      <Container maxWidth="full" className="w-full">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 xl:gap-8 justify-center items-stretch w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Card variant="glass-apple" className="rounded-2xl p-5 sm:p-6 lg:p-8 border border-aqua-500/20 hover:border-aqua-500/40 transition-all flex-1 w-full">
            <CardContent className="p-0 text-center space-y-2">
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-foreground leading-tight">Oracle-Based Price Discovery</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Chainlink price feeds provide real-time asset valuations, enabling precise target weight calculations 
                and deviation detection for rebalancing triggers.
              </p>
            </CardContent>
          </Card>
          
          <Card variant="glass-apple" className="rounded-2xl p-5 sm:p-6 lg:p-8 border border-aqua-500/20 hover:border-aqua-500/40 transition-all flex-1 w-full">
            <CardContent className="p-0 text-center space-y-2">
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-foreground leading-tight">Event-Driven Rebalancing</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Automatic strategy recalculation on deposit, withdraw, and swap events ensures portfolio composition 
                remains aligned with target weights, minimizing IL accumulation.
              </p>
            </CardContent>
          </Card>

          <Card variant="glass-apple" className="rounded-2xl p-5 sm:p-6 lg:p-8 border border-aqua-500/20 hover:border-aqua-500/40 transition-all flex-1 w-full">
            <CardContent className="p-0 text-center space-y-2">
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-foreground leading-tight">Multi-Step Swap Orchestration</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Complex basket rebalancing executed through sequential swap operations via Aqua Protocol's 
                virtual liquidity layer, maintaining capital efficiency across multiple DEX aggregators.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

