import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/atomic/Container"
import { Code, Coins, Settings, TrendingUp } from "lucide-react"

export function FactorSDKSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-aqua-500/5 w-full">
      <Container maxWidth="full" className="w-full">
        <div className="text-center mb-16 sm:mb-20 md:mb-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Badge variant="outline" className="glass-apple mb-6">
            <Code className="w-3 h-3 mr-1" />
            Powered by Factor Studio SDK
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 w-full">
            Create & Manage ERC-4626 Vaults
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto w-full">
            Deploy secure, ERC-4626-compliant vaults using Factor Studio SDK. Set your fees, manage your vault, 
            and earn revenue from deposits, withdrawals, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Card variant="glass" className="border-aqua-500/20">
            <CardHeader className="p-8">
              <div className="w-16 h-16 rounded-lg bg-aqua-500/10 flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-aqua-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-3">ERC-4626 Standard</CardTitle>
              <CardDescription className="text-base">
                Industry-standard vault interface
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                All Wave vaults are built on the ERC-4626 tokenized vault standard, ensuring compatibility 
                with the broader DeFi ecosystem and enabling seamless integration with existing protocols.
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-aqua-500/20">
            <CardHeader className="p-8">
              <div className="w-16 h-16 rounded-lg bg-aqua-500/10 flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-aqua-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-3">Configure Your Vault</CardTitle>
              <CardDescription className="text-base">
                Set fees and parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                As a vault creator, you control:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Deposit fees</li>
                <li>Withdrawal fees</li>
                <li>Management fees</li>
                <li>Performance fees</li>
                <li>Fee receiver address</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-aqua-500/20">
            <CardHeader className="p-8">
              <div className="w-16 h-16 rounded-lg bg-aqua-500/10 flex items-center justify-center mb-6">
                <Coins className="w-8 h-8 text-aqua-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-3">Earn Fees</CardTitle>
              <CardDescription className="text-base">
                Revenue from vault operations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Receive fees directly to your configured fee receiver address. Fees accumulate from all vault 
                operations including deposits, withdrawals, and performance-based charges. Claim your fees anytime.
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-aqua-500/20">
            <CardHeader className="p-8">
              <div className="w-16 h-16 rounded-lg bg-aqua-500/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-aqua-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-3">Factor Studio SDK</CardTitle>
              <CardDescription className="text-base">
                Built on proven infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Wave leverages Factor Studio SDK for vault deployment and management. Benefit from battle-tested 
                smart contracts, built-in security best practices, and comprehensive protocol adapters.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Card variant="glass-strong" className="p-10 sm:p-12 md:p-16">
            <CardHeader className="p-0 pb-8">
              <CardTitle className="text-2xl sm:text-3xl mb-3">How It Works</CardTitle>
              <CardDescription className="text-base">
                Create, configure, and monetize your vault
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-500 font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-3 text-lg">Deploy Your Vault</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Use Factor Studio SDK to deploy an ERC-4626 compliant vault. Configure allowed tokens, 
                      target weights, and initial strategy parameters. The vault is deployed on-chain with 
                      immutable configuration hashes for auditability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-500 font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-3 text-lg">Set Your Fees</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Configure deposit fees, withdrawal fees, management fees, and performance fees. 
                      Set your fee receiver address where all collected fees will be sent. Fees are 
                      collected automatically on each vault operation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aqua-500/20 flex items-center justify-center text-aqua-500 font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-3 text-lg">Manage & Earn</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      As vault manager, you can update strategy parameters, manage risk settings, and 
                      execute rebalancing operations. All fees collected from deposits, withdrawals, 
                      and performance are sent to your fee receiver address. Claim your fees anytime.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}


