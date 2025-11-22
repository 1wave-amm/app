import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/atomic/Container"
import { Lock } from "lucide-react"

export function TechnicalArchitectureSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 w-full">
      <Container maxWidth="full" className="w-full">
        <div className="text-center mb-16 sm:mb-20 md:mb-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Badge variant="outline" className="glass-apple mb-6">
            <Lock className="w-3 h-3 mr-1" />
            On-Chain Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 w-full">
            Technical Architecture
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto w-full">
            Built on immutable smart contracts with composable adapter patterns and 
            oracle-driven rebalancing mechanisms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Card variant="glass-strong" className="p-10 sm:p-12 md:p-16">
            <CardHeader className="p-0 pb-8">
              <CardTitle className="text-2xl sm:text-3xl mb-3">Vault Smart Contract</CardTitle>
              <CardDescription className="text-base">Core product contract</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-aqua-500 text-lg">Permissionless Creation</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Anyone can deploy a Vault specifying: allowed tokens, enabled pairs, fee structure 
                    (deposit, withdraw, management), and target weights for basket configurations.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-aqua-500 text-lg">Share-Based Ownership</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    ERC-20 shares represent proportional ownership. Share value = (Total Vault Value) / (Total Shares). 
                    Shares are minted on deposit and burned on withdraw, with value recalculated using oracle prices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-aqua-500 text-lg">Strategy Hash Immutability</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Each Vault's strategy configuration is hashed and stored immutably. Strategy updates 
                    require creating new strategy hashes, ensuring auditability and preventing manipulation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="glass-strong" className="p-10 sm:p-12 md:p-16">
            <CardHeader className="p-0 pb-8">
              <CardTitle className="text-2xl sm:text-3xl mb-3">Aqua Protocol Integration</CardTitle>
              <CardDescription className="text-base">Virtual liquidity layer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-aqua-500 text-lg">Ship Strategy</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Initialize virtual balances in Aqua by calling <code className="text-xs bg-aqua-500/10 px-2 py-1 rounded">ship()</code> 
                    with strategy configuration, tokens, and initial amounts. Returns immutable strategy hash.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-aqua-500 text-lg">Pull/Push Operations</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    During swaps: <code className="text-xs bg-aqua-500/10 px-2 py-1 rounded">pull()</code> decrements virtual balance 
                    and transfers tokens from maker; <code className="text-xs bg-aqua-500/10 px-2 py-1 rounded">push()</code> increments 
                    virtual balance and transfers tokens to maker. Auto-compounding occurs automatically.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-aqua-500 text-lg">Balance Queries</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Query virtual balances via <code className="text-xs bg-aqua-500/10 px-2 py-1 rounded">getBalance()</code> 
                    using maker address, app address, strategy hash, and token address. Enables real-time 
                    portfolio composition tracking.
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

