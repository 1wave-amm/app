import { CreateVaultWizard } from "@/components/vault/CreateVaultWizard"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function CreateVault() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Create Vault</h1>
        <p className="text-muted-foreground">
          Set up your liquidity vault in a few simple steps
        </p>
      </div>

      <Card variant="glass-apple" className="w-full">
        <CardHeader>
          <CardTitle>Vault Configuration</CardTitle>
          <CardDescription>
            Configure your vault settings step by step
          </CardDescription>
        </CardHeader>
        <CreateVaultWizard />
      </Card>
    </div>
  )
}

