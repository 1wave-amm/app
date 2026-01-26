import { useMemo, useState } from "react"
import { Calendar, CheckCircle2, MapPin, PartyPopper, AlertTriangle } from "lucide-react"
import { Container } from "@/components/atomic/Container"
import { DemoNotice } from "@/components/common/DemoNotice"
import { FactorTokenlist } from "@factordao/tokenlist"
import { Link } from "react-router-dom"

type EventInfo = {
  title: string
  subtitle: string
  date: string
  location: string
  cta: string
}

type ConfettiPiece = {
  id: string
  left: number
  size: number
  rotation: number
  delay: number
  duration: number
  color: string
}

const EVENTS: EventInfo[] = [
  {
    title: "Stable Summit IV: New York",
    subtitle: "Our most institutional event ever",
    date: "2026-06-04",
    location: "New York, USA",
    cta: "Applications Open Soon",
  },
  {
    title: "Stablecoin Summit Singapore 2026",
    subtitle: "Where builders and institutions meet",
    date: "2026-10-08",
    location: "Singapore",
    cta: "Applications Open Soon",
  },
  {
    title: "Stable Summit IV: DEVCON",
    subtitle: "Stablecoins at the heart of the ecosystem",
    date: "2026-11-04",
    location: "Mumbai, India",
    cta: "Applications Open Soon",
  },
]

const CONFETTI_COLORS = ["#fbbf24", "#34d399", "#f97316", "#60a5fa", "#f472b6"]

const createConfettiPieces = (count: number) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${Date.now()}-${index}`,
    left: Math.random() * 100,
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
    delay: Math.random() * 0.3,
    duration: 1.8 + Math.random() * 1.4,
    color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
  }))

const formatShares = (value: number) => (value % 1 === 0 ? value.toFixed(0) : value.toFixed(2))

type DepositMessage = { type: "success" | "error"; text: string } | null

type VaultDepositSectionProps = {
  depositTokens: { symbol: string; logoUrl?: string }[]
  selectedToken: string
  depositAmount: string
  isAdopted: boolean
  depositMessage: DepositMessage
  quickDeposits: number[]
  onAdopt: () => void
  onSelectToken: (token: string) => void
  onDepositAmountChange: (value: string) => void
  onDeposit: (amount?: number) => void
}

type SummitHeroProps = VaultDepositSectionProps

type TicketSimulatorSectionProps = {
  ticketPrice: number
  sharesBalance: number
  canBuy: boolean
  statusMessage: { type: "success" | "error"; text: string } | null
  prePurchaseMessage: { type: "success" | "error"; text: string } | null
  confettiPieces: ConfettiPiece[]
  ticketCode: string
  onPurchase: () => void
  onPrePurchase: (item: string, cost: number) => void
}

export function Landing() {
  const ticketPrice = 25
  const [sharesBalance, setSharesBalance] = useState(0)
  const [depositAmount, setDepositAmount] = useState("")
  const [selectedToken, setSelectedToken] = useState("USDC")
  const [isAdopted, setIsAdopted] = useState(false)
  const [ticketCode, setTicketCode] = useState("SS-2026-0001")
  const [purchaseCount, setPurchaseCount] = useState(0)
  const [depositMessage, setDepositMessage] = useState<DepositMessage>(null)
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [prePurchaseMessage, setPrePurchaseMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([])

  const canBuy = sharesBalance >= ticketPrice

  const depositTokens = useMemo(() => ["USDC", "USDT", "GHO", "USDS", "DAI"], [])
  const depositTokenMeta = useMemo(() => {
    try {
      const tokenlist = new FactorTokenlist(8453 as any)
      const allTokens = tokenlist.getAllGeneralTokens()
      return depositTokens.map((symbol) => {
        const token = allTokens.find(
          (entry: any) => entry.symbol?.toUpperCase() === symbol.toUpperCase()
        )
        return { symbol, logoUrl: token?.logoUrl }
      })
    } catch (error) {
      return depositTokens.map((symbol) => ({ symbol }))
    }
  }, [depositTokens])
  const quickDeposits = useMemo(() => [25, 50, 100], [])

  const triggerConfetti = () => {
    const pieces = createConfettiPieces(28)
    setConfettiPieces(pieces)
    window.setTimeout(() => setConfettiPieces([]), 2600)
  }

  const handleDeposit = (amount?: number) => {
    if (!isAdopted) {
      setDepositMessage({ type: "error", text: "Adopt the vault before depositing." })
      return
    }
    const value = typeof amount === "number" ? amount : Number(depositAmount)
    if (!Number.isFinite(value) || value <= 0) {
      setDepositMessage({ type: "error", text: "Enter a valid deposit amount." })
      return
    }
    setSharesBalance((prev) => Number((prev + value).toFixed(2)))
    setDepositAmount("")
    setDepositMessage({ type: "success", text: `Deposited ${value} ${selectedToken}.` })
  }

  const handlePurchase = () => {
    if (!canBuy) {
      setStatusMessage({ type: "error", text: "Not enough shares to buy the ticket." })
      return
    }
    const nextCount = purchaseCount + 1
    setPurchaseCount(nextCount)
    setTicketCode(`SS-2026-${String(nextCount).padStart(4, "0")}`)
    setSharesBalance((prev) => Number((prev - ticketPrice).toFixed(2)))
    setDepositMessage(null)
    setStatusMessage({
      type: "success",
      text: "Ticket confirmed. See you at Stable Summit.",
    })
    triggerConfetti()
  }

  const handleAdopt = () => {
    if (isAdopted) return
    setIsAdopted(true)
    setDepositMessage({ type: "success", text: "Vault adopted. You can deposit now." })
  }

  const handlePrePurchase = (item: string, cost: number) => {
    if (sharesBalance < cost) {
      setPrePurchaseMessage({ type: "error", text: `Not enough shares to buy ${item}.` })
      return
    }
    setSharesBalance((prev) => Number((prev - cost).toFixed(2)))
    setPrePurchaseMessage({
      type: "success",
      text: `${item} purchased successfully!`,
    })
    // Clear message after 3 seconds
    setTimeout(() => setPrePurchaseMessage(null), 3000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.2),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.2),transparent_70%)] blur-3xl" />
      </div>
      <SummitHeader />
      <main className="relative z-10 pt-8 pb-20">
        <Container maxWidth="full" className="max-w-6xl">
          <DemoNotice className="mt-8" />
        </Container>
        <SummitHero
          depositTokens={depositTokenMeta}
          selectedToken={selectedToken}
          depositAmount={depositAmount}
          isAdopted={isAdopted}
          depositMessage={depositMessage}
          quickDeposits={quickDeposits}
          onAdopt={handleAdopt}
          onSelectToken={setSelectedToken}
          onDepositAmountChange={setDepositAmount}
          onDeposit={handleDeposit}
        />
        <TicketSimulatorSection
          ticketPrice={ticketPrice}
          sharesBalance={sharesBalance}
          canBuy={canBuy}
          statusMessage={statusMessage}
          prePurchaseMessage={prePurchaseMessage}
          confettiPieces={confettiPieces}
          ticketCode={ticketCode}
          onPurchase={handlePurchase}
          onPrePurchase={handlePrePurchase}
        />
        <SummitEvents />
        <AboutSection />
      </main>
    </div>
  )
}

function SummitHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container maxWidth="full" className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black text-xs font-semibold">
            S
          </span>
          <span className="text-sm font-semibold tracking-[0.08em] uppercase text-white">
            Stable Summit
          </span>
        </div>
        <Link
          to="/embed-vault"
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white hover:bg-white/15"
        >
          Embed your vault
        </Link>
      </Container>
    </header>
  )
}

function SummitHero({
  depositTokens,
  selectedToken,
  depositAmount,
  isAdopted,
  depositMessage,
  quickDeposits,
  onAdopt,
  onSelectToken,
  onDepositAmountChange,
  onDeposit,
}: SummitHeroProps) {
  return (
    <section className="pt-8 sm:pt-12">
      <Container maxWidth="full" className="max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Stable Summit</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
              The Global Stablecoin Conference
            </h1>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed">
              Stable Summit is the world&apos;s one-stop event to meet the entire stablecoin ecosystem.
              From anon supercoders to central bankers, and all the stablecoin issuers in between, we
              have attracted thousands of leaders in stablecoins and DeFi across our seven editions
              since 2023.
            </p>
          </div>
          <SummitEmblem />
        </div>
        <SummitEventsVaultSection
          depositTokens={depositTokens}
          selectedToken={selectedToken}
          depositAmount={depositAmount}
          isAdopted={isAdopted}
          depositMessage={depositMessage}
          quickDeposits={quickDeposits}
          onAdopt={onAdopt}
          onSelectToken={onSelectToken}
          onDepositAmountChange={onDepositAmountChange}
          onDeposit={onDeposit}
        />
      </Container>
    </section>
  )
}

function SummitEvents() {
  return (
    <section className="py-10 sm:py-12">
      <Container maxWidth="full" className="max-w-4xl">
        <div className="mb-6">
          <div className="h-px w-full bg-white/10" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/50">
            Next coming events
          </p>
        </div>
        <div className="space-y-4">
          {EVENTS.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function SummitEventsVaultSection({
  depositTokens,
  selectedToken,
  depositAmount,
  isAdopted,
  depositMessage,
  quickDeposits,
  onAdopt,
  onSelectToken,
  onDepositAmountChange,
  onDeposit,
}: VaultDepositSectionProps) {
  return (
    <div className="mt-12 flex justify-center">
      <div
        className={`w-full max-w-5xl gap-6 lg:items-start ${
          isAdopted ? "grid lg:grid-cols-2" : "flex justify-center"
        }`}
      >
        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Vault</p>
                <h3 className="text-2xl font-semibold">USD StableSummit</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-white/70">
                Stable Vault
              </span>
            </div>
            <p className="mt-4 text-base text-white/60">
              Deposit USDC, USDT, GHO, USDS, or DAI to mint vault shares.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {depositTokens.map((token) => (
                <span
                  key={token.symbol}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
                >
                  {token.logoUrl ? (
                    <img
                      src={token.logoUrl}
                      alt={token.symbol}
                      className="h-5 w-5 rounded-full"
                      onError={(event) => {
                        event.currentTarget.style.display = "none"
                      }}
                    />
                  ) : (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-white/60">
                      {token.symbol.charAt(0)}
                    </span>
                  )}
                  {token.symbol}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={onAdopt}
              className={`mt-6 w-full rounded-2xl px-5 py-3 text-base font-semibold transition ${
                isAdopted
                  ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 cursor-default"
                  : "bg-white text-black hover:bg-white/90"
              }`}
              disabled={isAdopted}
            >
              {isAdopted ? "Adopted" : "Adopt it"}
            </button>
          </div>
        </div>

        {isAdopted && (
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <label className="text-base font-medium text-white/80">Deposit stablecoins</label>
            <div className="mt-4 flex flex-wrap gap-3">
              {depositTokens.map((token) => (
                <button
                  key={token.symbol}
                  type="button"
                  onClick={() => onSelectToken(token.symbol)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition ${
                    selectedToken === token.symbol
                      ? "border-lime-200/70 bg-lime-200/20 text-lime-100"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-white/30"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    {token.logoUrl ? (
                      <img
                        src={token.logoUrl}
                        alt={token.symbol}
                        className="h-5 w-5 rounded-full"
                        onError={(event) => {
                          event.currentTarget.style.display = "none"
                        }}
                      />
                    ) : (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-white/60">
                        {token.symbol.charAt(0)}
                      </span>
                    )}
                    {token.symbol}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="number"
                min="0"
                step="1"
                value={depositAmount}
                onChange={(event) => onDepositAmountChange(event.target.value)}
                placeholder={`Enter ${selectedToken} amount`}
                className="h-12 w-full rounded-2xl border border-white/15 bg-black/40 px-4 text-base text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              />
              <button
                type="button"
                onClick={() => onDeposit()}
                className="h-12 rounded-2xl bg-white px-6 text-base font-semibold text-black transition hover:bg-white/90"
              >
                Deposit
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {quickDeposits.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => onDeposit(amount)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  +{amount}
                </button>
              ))}
            </div>
            {depositMessage && (
              <div
                className={`mt-4 rounded-2xl border px-4 py-2 text-sm ${
                  depositMessage.type === "success"
                    ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                    : "border-rose-400/30 bg-rose-500/10 text-rose-100"
                }`}
              >
                {depositMessage.text}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function EventCard({ event }: { event: EventInfo }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%)] opacity-40" />
      <div className="relative space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">{event.title}</h3>
          <p className="text-sm text-white/60">{event.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="pt-2">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-lime-300 via-lime-200 to-orange-400 px-4 py-1.5 text-xs font-semibold text-black shadow-[0_0_18px_rgba(250,204,21,0.25)]">
            {event.cta}
          </span>
        </div>
      </div>
    </div>
  )
}

function TicketSimulatorSection({
  ticketPrice,
  sharesBalance,
  canBuy,
  statusMessage,
  prePurchaseMessage,
  confettiPieces,
  ticketCode,
  onPurchase,
  onPrePurchase,
}: TicketSimulatorSectionProps) {
  return (
    <section className="py-10 sm:py-12">
      <Container maxWidth="full" className="max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          {confettiPieces.length > 0 && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {confettiPieces.map((piece) => (
                <span
                  key={piece.id}
                  className="confetti-piece"
                  style={{
                    left: `${piece.left}%`,
                    width: `${piece.size}px`,
                    height: `${piece.size * 0.6}px`,
                    backgroundColor: piece.color,
                    transform: `rotate(${piece.rotation}deg)`,
                    animationDelay: `${piece.delay}s`,
                    animationDuration: `${piece.duration}s`,
                  }}
                />
              ))}
            </div>
          )}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Ticket Simulator</p>
                <h2 className="text-2xl sm:text-3xl font-semibold">Buy a ticket with vault shares</h2>
                <p className="text-sm text-white/65">
                  Each share is worth $1, and the ticket costs $25. After purchase, we show your 3D
                  ticket with a confetti celebration.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Shares balance</span>
                  <span className="text-white font-semibold">{formatShares(sharesBalance)} SHARES</span>
                </div>
                <p className="mt-2 text-xs text-white/60">
                  1 share = $1. Ticket price: {ticketPrice} shares (${ticketPrice}).
                </p>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={onPurchase}
                  disabled={!canBuy}
                  className={`w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    canBuy
                      ? "bg-gradient-to-r from-lime-300 via-lime-200 to-orange-400 text-black shadow-[0_0_24px_rgba(250,204,21,0.3)] hover:opacity-90"
                      : "bg-white/10 text-white/40 cursor-not-allowed"
                  }`}
                >
                  Buy ticket for {ticketPrice} shares
                </button>

                {statusMessage && (
                  <div
                    className={`flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${
                      statusMessage.type === "success"
                        ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                        : "border-rose-400/30 bg-rose-500/10 text-rose-100"
                    }`}
                  >
                    {statusMessage.type === "success" ? (
                      <PartyPopper className="mt-0.5 h-4 w-4" />
                    ) : (
                      <AlertTriangle className="mt-0.5 h-4 w-4" />
                    )}
                    <span>{statusMessage.text}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 flex items-start justify-center">
              {statusMessage?.type === "success" ? (
                <div className="w-full max-w-md -mt-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-emerald-200 mb-3">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Ticket is ready in your wallet.</span>
                  </div>
                  <div className="flex justify-center mb-4">
                    <Ticket3D ticketCode={ticketCode} />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white hover:bg-white/15"
                  >
                    Add to Wallet
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-6 text-center text-sm text-white/60">
                  <div className="h-24 w-24 rounded-full border border-white/10 bg-white/5" />
                  Purchase a ticket to reveal the 3D pass.
                </div>
              )}
            </div>
          </div>

          {statusMessage?.type === "success" && (
            <>
              <div className="h-px w-full bg-white/10 my-6" />
              <PrePurchaseCard sharesBalance={sharesBalance} onPrePurchase={onPrePurchase} />
              {prePurchaseMessage && (
                <div
                  className={`mt-4 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${
                    prePurchaseMessage.type === "success"
                      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                      : "border-rose-400/30 bg-rose-500/10 text-rose-100"
                  }`}
                >
                  {prePurchaseMessage.type === "success" ? (
                    <PartyPopper className="mt-0.5 h-4 w-4" />
                  ) : (
                    <AlertTriangle className="mt-0.5 h-4 w-4" />
                  )}
                  <span>{prePurchaseMessage.text}</span>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </section>
  )
}

function Ticket3D({ ticketCode }: { ticketCode: string }) {
  const [tilt, setTilt] = useState({ x: 12, y: -16 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({
      x: Math.max(-18, Math.min(18, y * -24)),
      y: Math.max(-18, Math.min(18, x * 24)),
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 12, y: -16 })
  }

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="ticket-float"
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.6)] transition-transform duration-150 ease-out min-h-[180px]"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.25),transparent_60%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between text-[11px] uppercase text-white/70">
              <span>Stable Summit Ticket</span>
              <span>{ticketCode}</span>
            </div>
            <div>
              <div className="text-lg font-semibold">Stable Summit IV: New York</div>
              <div className="text-sm text-white/70">2026-06-04 • New York, USA</div>
            </div>
            <div className="flex items-center justify-between text-xs text-white/70">
              <span>Entry</span>
              <span className="rounded-full bg-white/10 px-3 py-1">General Admission</span>
            </div>
          </div>
          <div
            className="absolute -right-2 top-6 bottom-6 w-2 rounded-full bg-gradient-to-b from-lime-300 to-orange-400 opacity-80"
            style={{ transform: "translateZ(-18px)" }}
          />
        </div>
      </div>
      <div className="absolute inset-x-8 -bottom-6 h-6 rounded-full bg-black/70 blur-xl" />
    </div>
  )
}

function PrePurchaseCard({
  sharesBalance,
  onPrePurchase,
}: {
  sharesBalance: number
  onPrePurchase: (item: string, cost: number) => void
}) {
  const items = [
    { name: "Beer", cost: 4, emoji: "🍺" },
    { name: "Sandwich", cost: 7, emoji: "🥪" },
  ]

  const [shagPoints, setShagPoints] = useState(1)

  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
      <h3 className="text-base font-semibold text-white mb-2">Pre-purchase with shares</h3>
      <p className="text-xs text-white/60 mb-4">
        Use your vouchers at merchants inside the conference to get beer, sandwiches, or swag.
      </p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => {
          const canBuy = sharesBalance >= item.cost
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => onPrePurchase(item.name, item.cost)}
              disabled={!canBuy}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                canBuy
                  ? "border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                  : "border-white/10 bg-white/5 text-white/40 cursor-not-allowed"
              }`}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="font-medium">{item.name}</span>
              <span className="text-white/70">{item.cost} shares</span>
            </button>
          )
        })}
        <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
          <span className="text-xl">🎁</span>
          <span className="font-medium text-sm">Shag Points</span>
          <span className="text-xs text-white/60">1 point = 1$ shares</span>
          <input
            type="number"
            min="1"
            value={shagPoints}
            onChange={(e) => setShagPoints(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 rounded-lg border border-white/15 bg-black/40 px-2 py-1 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          />
        </div>
        <button
          type="button"
          onClick={() => onPrePurchase(`${shagPoints} Shag Points`, shagPoints)}
          disabled={sharesBalance < shagPoints}
          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
            sharesBalance >= shagPoints
              ? "border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/20"
              : "border-white/10 bg-white/5 text-white/40 cursor-not-allowed"
          }`}
        >
          Buy
        </button>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container maxWidth="full" className="max-w-4xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif">About Us</h2>
          <p className="text-sm sm:text-base text-white/65 leading-relaxed">
            By Stake Capital Group and Party Action People, and presented by Curve Finance, Stable
            Summit has been gathering leaders in stablecoins almost quarterly since 2023. Our content
            is curated through hours of one-on-one research with the leading minds in the stablecoin
            space. Each program is a highlight reel of what leaders in stables are curious about in
            real time. Our audience consistently features the full spectrum of the stablecoin
            ecosystem, from DeFi protocols to institutions, from stablecoin issuers to central banks,
            and every llama in between.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-6">
          <SummitEmblem muted />
          <Link
            to="/embed-vault"
            className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white hover:bg-white/15"
          >
            Embed your vault widget
          </Link>
        </div>
      </Container>
    </section>
  )
}

function SummitEmblem({ muted = false }: { muted?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center ${muted ? "opacity-70" : ""}`}>
      <div className="relative h-44 w-44">
        <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rotate-45 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-amber-400 shadow-[0_30px_60px_rgba(234,88,12,0.35)]" />
        <div className="absolute left-1/2 top-6 h-16 w-16 -translate-x-1/2 rotate-45 rounded-2xl bg-gradient-to-br from-orange-700 via-red-600 to-amber-500 opacity-70" />
        <div className="absolute left-1/2 top-16 h-24 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4b4b4b,#111)] shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
      </div>
    </div>
  )
}
