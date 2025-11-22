import { SwapInterface } from "@/components/swap/SwapInterface"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Swap tokens across all Wave Vaults
        </p>
      </div>

      <Card variant="glass-apple" className="w-full">
        <CardHeader>
          <CardTitle>Swap Tokens</CardTitle>
          <CardDescription>
            Trade tokens using aggregated liquidity from all vaults
          </CardDescription>
        </CardHeader>
        <SwapInterface />
      </Card>
    </div>
  )
}

