import { useEffect, useState } from "react"
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

type StableToken = {
  symbol: string
  name: string
  tint: string
}

const VAULT = {
  id: "stable-basket",
  name: "Stable Basket Vault",
  description:
    "Single vault holding multiple stablecoins with a fixed 1:1 share price.",
  tvl: "$18.4M",
  apy: "6.2%",
  tokens: [
    { symbol: "USDC", name: "USD Coin", tint: "from-blue-400 to-blue-600" },
    { symbol: "GHO", name: "GHO", tint: "from-emerald-400 to-emerald-600" },
    { symbol: "USDT", name: "Tether USD", tint: "from-green-400 to-green-600" },
  ] satisfies StableToken[],
}

const SHARE_PRICE = 1

const formatShares = (value: string) => {
  const parsed = Number(value)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return "0"
  }

  return parsed.toLocaleString(undefined, { maximumFractionDigits: 6 })
}

export function Landing() {
  const [isAdopted, setIsAdopted] = useState(false)
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")

  useEffect(() => {
    setDepositAmount("")
    setWithdrawAmount("")
  }, [isAdopted])

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
                    One stable vault with a {sharePriceLabel} share price
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                    A single basket vault holding USDC, GHO, and USDT. Every $1
                    deposited mints 1 share. Withdraw at the same 1:1 price.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {VAULT.tokens.map((token) => (
                    <Badge key={token.symbol} variant="secondary" className="text-xs">
                      {token.symbol}
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
                    <h2 className="text-2xl font-semibold">Vault</h2>
                    <p className="text-sm text-muted-foreground">
                      One basket vault, fixed $1.00 share price.
                    </p>
                  </div>
                  <Badge variant="secondary">Share price {sharePriceLabel}</Badge>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <Card
                    variant="glass-apple"
                    className={cn(
                      "min-h-[260px] transition-all duration-300",
                      isAdopted ? "ring-2 ring-aqua-500 shadow-lg" : "hover:shadow-md"
                    )}
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {VAULT.tokens.map((token) => (
                            <div
                              key={token.symbol}
                              className={cn(
                                "h-10 w-10 rounded-full bg-gradient-to-br text-white flex items-center justify-center text-[10px] font-bold tracking-wide border border-white/60",
                                token.tint
                              )}
                              title={token.name}
                            >
                              {token.symbol}
                            </div>
                          ))}
                        </div>
                        {isAdopted && <Badge variant="secondary">Selected</Badge>}
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{VAULT.name}</CardTitle>
                        <CardDescription>{VAULT.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Share price</span>
                        <span className="font-semibold">{sharePriceLabel}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl border border-border/40 p-3">
                          <p className="text-xs text-muted-foreground">Mock TVL</p>
                          <p className="text-base font-semibold">{VAULT.tvl}</p>
                        </div>
                        <div className="rounded-2xl border border-border/40 p-3">
                          <p className="text-xs text-muted-foreground">Mock APY</p>
                          <p className="text-base font-semibold">{VAULT.apy}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          Stablecoins in vault
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {VAULT.tokens.map((token) => (
                            <Badge key={token.symbol} variant="secondary">
                              {token.symbol}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        1 USD deposit = 1 share minted.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="glass-apple"
                        className="w-full"
                        onClick={() => setIsAdopted(true)}
                      >
                        Adopt it
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card
                    variant="glass-apple"
                    className="min-h-[260px] transition-all duration-300"
                  >
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Deposit / Withdraw</CardTitle>
                        <Badge variant={isAdopted ? "secondary" : "outline"}>
                          {isAdopted ? "Stable Basket" : "No vault"}
                        </Badge>
                      </div>
                      <CardDescription>
                        This vault keeps a {sharePriceLabel} share price. $1 = 1
                        share for every deposit.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isAdopted ? (
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
                          <p>Select the vault to start.</p>
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
