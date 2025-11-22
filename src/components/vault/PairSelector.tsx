import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface Pair {
  tokenA: {
    symbol: string
    logoURI?: string
    logoUrl?: string
    address: string
  }
  tokenB: {
    symbol: string
    logoURI?: string
    logoUrl?: string
    address: string
  }
  id: string // Unique identifier for the pair (e.g., "tokenA_address-tokenB_address")
}

interface PairSelectorProps {
  pairs: Pair[]
  selected: string[] // Array of pair IDs
  onMultiChange: (pairIds: string[]) => void
  className?: string
  title?: string
}

interface PairRowProps {
  pair: Pair
  isSelected: boolean
  onSelect: () => void
}

function PairRow({ pair, isSelected, onSelect }: PairRowProps) {
  return (
    <div
      className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/50 transition-colors cursor-pointer group"
      onClick={onSelect}
    >
      {/* Left: Token A Logo + Symbol / Token B Logo + Symbol */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Token A */}
        <div className="flex items-center gap-2">
          {(pair.tokenA.logoURI || pair.tokenA.logoUrl) ? (
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-muted">
              <img
                src={pair.tokenA.logoURI || pair.tokenA.logoUrl}
                alt={pair.tokenA.symbol}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
              <span className="text-xs font-semibold text-muted-foreground">
                {pair.tokenA.symbol?.charAt(0) || '?'}
              </span>
            </div>
          )}
          <span className="font-medium text-sm">{pair.tokenA.symbol}</span>
        </div>

        {/* Separator */}
        <span className="text-muted-foreground">/</span>

        {/* Token B */}
        <div className="flex items-center gap-2">
          {(pair.tokenB.logoURI || pair.tokenB.logoUrl) ? (
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-muted">
              <img
                src={pair.tokenB.logoURI || pair.tokenB.logoUrl}
                alt={pair.tokenB.symbol}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
              <span className="text-xs font-semibold text-muted-foreground">
                {pair.tokenB.symbol?.charAt(0) || '?'}
              </span>
            </div>
          )}
          <span className="font-medium text-sm">{pair.tokenB.symbol}</span>
        </div>
      </div>

      {/* Right: Checkbox */}
      <div className="text-right flex-shrink-0">
        {isSelected ? (
          <div className="w-4 h-4 rounded-full bg-primary" />
        ) : (
          <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
        )}
      </div>
    </div>
  )
}

export function PairSelector({ pairs, selected, onMultiChange, className, title = "Select Pairs" }: PairSelectorProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const filteredPairs = useMemo(() => {
    if (!search) return pairs

    const searchLower = search.toLowerCase()
    return pairs.filter((pair) => {
      const tokenASymbol = pair.tokenA.symbol?.toLowerCase() || ''
      const tokenBSymbol = pair.tokenB.symbol?.toLowerCase() || ''
      return tokenASymbol.includes(searchLower) || tokenBSymbol.includes(searchLower)
    })
  }, [pairs, search])

  const togglePair = (pairId: string) => {
    if (selected.includes(pairId)) {
      onMultiChange(selected.filter((id) => id !== pairId))
    } else {
      onMultiChange([...selected, pairId])
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="glass"
          className={cn(
            "w-full justify-between",
            className
          )}
        >
          <span>Select pairs ({selected.length} selected)</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent variant="glass-apple" className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            variant="glass"
            placeholder="Search pair..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="max-h-[400px] overflow-y-auto space-y-1 scrollbar-hide">
            {filteredPairs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No pairs found
              </div>
            ) : (
              filteredPairs.map((pair) => {
                const isSelected = selected.includes(pair.id)
                return (
                  <PairRow
                    key={pair.id}
                    pair={pair}
                    isSelected={isSelected}
                    onSelect={() => togglePair(pair.id)}
                  />
                )
              })
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

