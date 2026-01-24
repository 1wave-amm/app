import { useEffect, useMemo, useState } from "react"
import { Header } from "@/components/layout/Header"
import { MobileFooterNav } from "@/components/layout/MobileFooterNav"
import { AnimatedWaveBackground } from "@/components/landing/AnimatedWaveBackground"
import { Container } from "@/components/atomic/Container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type VaultDefinition = {
  id: string
  symbol: string
  name: string
  description: string
  tint: string
}

const VAULTS: VaultDefinition[] = [
  {
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    description: "Regulated stablecoin vault with 1:1 shares.",
    tint: "from-blue-400 to-blue-600",
  },
  {
    id: "gho",
    symbol: "GHO",
    name: "GHO",
    description: "Overcollateralized stablecoin vault with 1:1 shares.",
    tint: "from-emerald-400 to-emerald-600",
  },
  {
    id: "usdt",
    symbol: "USDT",
    name: "Tether USD",
    description: "Liquidity-first stablecoin vault with 1:1 shares.",
    tint: "from-green-400 to-green-600",
  },
]

const SHARE_PRICE = 1

const formatShares = (value: string) => {
  const parsed = Number(value)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return "0"
  }

  return parsed.toLocaleString(undefined, { maximumFractionDigits: 6 })
}

export function Landing() {
  const [selectedVaultId, setSelectedVaultId] = useState<string | null>(null)
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")

  const selectedVault = useMemo(
    () => VAULTS.find((vault) => vault.id === selectedVaultId) ?? null,
    [selectedVaultId]
  )

  useEffect(() => {
    setDepositAmount("")
    setWithdrawAmount("")
  }, [selectedVaultId])

  const sharePriceLabel = `$${SHARE_PRICE.toFixed(2)}`

  return (
    <div className="min-h-screen relative overflow-hidden pb-20 md:pb-0">
      <AnimatedWaveBackground />
      <Header />
      <div className="relative z-10">
        <main className="py-12 sm:py-16 lg:py-20">
          <Container maxWidth="full">
            <div className="mx-auto max-w-6xl space-y-12">
              <section className="text-center space-y-6">
                <Badge
                  variant="outline"
                  className="glass-apple border-aqua-500/30 text-sm px-4 py-2"
                >
                  Stable Summit
                </Badge>
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                    Stablecoin vaults with a {sharePriceLabel} share price
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                    Simple mock vaults for USDC, GHO, and USDT. Every $1 deposited
                    mints 1 share. Withdraw at the same 1:1 price.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {VAULTS.map((vault) => (
                    <Badge key={vault.id} variant="secondary" className="text-xs">
                      {vault.symbol}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="text-xs">
                    Mock UI
                  </Badge>
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold">Vault list</h2>
                    <p className="text-sm text-muted-foreground">
                      Each vault keeps a fixed $1.00 share price.
                    </p>
                  </div>
                  <Badge variant="secondary">Share price {sharePriceLabel}</Badge>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="space-y-5">
                    {VAULTS.map((vault) => {
                      const isSelected = selectedVaultId === vault.id
                      return (
                        <Card
                          key={vault.id}
                          variant="glass-apple"
                          className={cn(
                            "min-h-[260px] transition-all duration-300",
                            isSelected
                              ? "ring-2 ring-aqua-500 shadow-lg"
                              : "hover:shadow-md"
                          )}
                        >
                          <CardHeader className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div
                                className={cn(
                                  "h-12 w-12 rounded-full bg-gradient-to-br text-white flex items-center justify-center text-xs font-bold tracking-wide",
                                  vault.tint
                                )}
                              >
                                {vault.symbol}
                              </div>
                              {isSelected && (
                                <Badge variant="secondary">Selected</Badge>
                              )}
                            </div>
                            <div className="space-y-1">
                              <CardTitle className="text-lg">
                                {vault.symbol} Vault
                              </CardTitle>
                              <CardDescription>{vault.description}</CardDescription>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                Share price
                              </span>
                              <span className="font-semibold">{sharePriceLabel}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              1 USD deposit = 1 share minted.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button
                              variant="glass-apple"
                              className="w-full"
                              onClick={() => setSelectedVaultId(vault.id)}
                            >
                              Adopt it
                            </Button>
                          </CardFooter>
                        </Card>
                      )
                    })}
                  </div>

                  <Card
                    variant="glass-apple"
                    className="min-h-[260px] transition-all duration-300"
                  >
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Deposit / Withdraw</CardTitle>
                        <Badge variant={selectedVault ? "secondary" : "outline"}>
                          {selectedVault ? selectedVault.symbol : "No vault"}
                        </Badge>
                      </div>
                      <CardDescription>
                        This vault keeps a {sharePriceLabel} share price. $1 = 1
                        share for every deposit.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedVault ? (
                        <Tabs defaultValue="deposit" className="space-y-4">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="deposit">Deposit</TabsTrigger>
                            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                          </TabsList>
                          <TabsContent value="deposit">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <label
                                  htmlFor="deposit-amount"
                                  className="text-sm font-medium"
                                >
                                  Amount
                                </label>
                                <Input
                                  id="deposit-amount"
                                  type="number"
                                  min="0"
                                  step="0.01"
                                  placeholder="0.00"
                                  variant="glass"
                                  value={depositAmount}
                                  onChange={(event) =>
                                    setDepositAmount(event.target.value)
                                  }
                                />
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                  <span>Share price</span>
                                  <span>{sharePriceLabel}</span>
                                </div>
                                <p className="text-sm">
                                  You receive{" "}
                                  <span className="font-semibold">
                                    {formatShares(depositAmount)}
                                  </span>{" "}
                                  shares.
                                </p>
                              </div>
                              <Button variant="glass-apple" className="w-full">
                                Deposit
                              </Button>
                            </div>
                          </TabsContent>
                          <TabsContent value="withdraw">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <label
                                  htmlFor="withdraw-amount"
                                  className="text-sm font-medium"
                                >
                                  Shares to withdraw
                                </label>
                                <Input
                                  id="withdraw-amount"
                                  type="number"
                                  min="0"
                                  step="0.01"
                                  placeholder="0.00"
                                  variant="glass"
                                  value={withdrawAmount}
                                  onChange={(event) =>
                                    setWithdrawAmount(event.target.value)
                                  }
                                />
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                  <span>Share price</span>
                                  <span>{sharePriceLabel}</span>
                                </div>
                                <p className="text-sm">
                                  You receive{" "}
                                  <span className="font-semibold">
                                    {formatShares(withdrawAmount)}
                                  </span>{" "}
                                  USD.
                                </p>
                              </div>
                              <Button variant="glass-apple" className="w-full">
                                Withdraw
                              </Button>
                            </div>
                          </TabsContent>
                        </Tabs>
                      ) : (
                        <div className="rounded-2xl border border-dashed border-border/60 p-6 text-sm text-muted-foreground space-y-2">
                          <p>Select a vault to start.</p>
                          <p>
                            Click "Adopt it" on the left to open the deposit and
                            withdraw card.
                          </p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="text-xs text-muted-foreground">
                      Mock interface. No transactions are executed.
                    </CardFooter>
                  </Card>
                </div>
              </section>
            </div>
          </Container>
        </main>
      </div>
      <MobileFooterNav />
    </div>
  )
}
