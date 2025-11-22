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
import { FactorTokenlist } from "@factordao/tokenlist"
import { useAccount } from "wagmi"
import { ChevronDown } from "lucide-react"
import { BASE_WHITELISTED_TOKENS, getBaseTokenByAddress } from "@/lib/constants/baseTokens"

interface TokenSelectorProps {
  value: string | null
  onChange: (value: string | null) => void
  className?: string
}

export function TokenSelector({ value, onChange, className }: TokenSelectorProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { chainId = 8453 } = useAccount() // Default to BASE

  // Get whitelisted addresses (filter out placeholders)
  const validWhitelistedTokens = BASE_WHITELISTED_TOKENS.filter((token) => {
    const isPlaceholder = 
      token.address === "0x0000000000000000000000000000000000000000" ||
      token.address.startsWith("0xcbB7C000") ||
      token.address.length !== 42
    return !isPlaceholder
  })

  // Get tokens from FactorTokenlist and filter by whitelist
  const availableTokens = useMemo(() => {
    try {
      // Get all tokens from FactorTokenlist for BASE chain
      const tokenlist = new FactorTokenlist(chainId as any)
      const allTokens = tokenlist.getAllGeneralTokens()
      
      // For each whitelisted token, try to find it in the tokenlist
      const foundTokens = validWhitelistedTokens.map((whitelistedToken) => {
        const whitelistedAddress = whitelistedToken.address.toLowerCase()
        
        // First try: getToken by address
        try {
          const token = tokenlist.getToken(whitelistedToken.address as `0x${string}`)
          if (token) {
            const tokenAny = token as any
            return {
              symbol: tokenAny.symbol || whitelistedToken.symbol,
              name: tokenAny.name || whitelistedToken.name,
              address: whitelistedAddress,
              decimals: tokenAny.decimals || whitelistedToken.decimals,
              logoUrl: tokenAny.logoUrl || tokenAny.logoURI || whitelistedToken.logoURI || '',
              logoURI: tokenAny.logoUrl || tokenAny.logoURI || whitelistedToken.logoURI || '',
            }
          }
        } catch (e) {
          // Continue to fallback
        }
        
        // Second try: search in getAllGeneralTokens
        const foundInList = allTokens.find((token: any) => 
          token.address?.toLowerCase() === whitelistedAddress
        )
        
        if (foundInList) {
          const tokenAny = foundInList as any
          return {
            symbol: tokenAny.symbol || whitelistedToken.symbol,
            name: tokenAny.name || whitelistedToken.name,
            address: whitelistedAddress,
            decimals: tokenAny.decimals || whitelistedToken.decimals,
            logoUrl: tokenAny.logoUrl || tokenAny.logoURI || whitelistedToken.logoURI || '',
            logoURI: tokenAny.logoUrl || tokenAny.logoURI || whitelistedToken.logoURI || '',
          }
        }
        
        // Fallback: use whitelisted token data
        return {
          symbol: whitelistedToken.symbol,
          name: whitelistedToken.name,
          address: whitelistedAddress,
          decimals: whitelistedToken.decimals,
          logoUrl: whitelistedToken.logoURI || '',
          logoURI: whitelistedToken.logoURI || '',
        }
      })
      
      return foundTokens
    } catch (error) {
      console.error('[TokenSelector] Error loading tokens:', error)
      // Fallback to whitelist only if tokenlist fails
      return validWhitelistedTokens.map((token) => ({
        symbol: token.symbol,
        name: token.name,
        address: token.address.toLowerCase(),
        decimals: token.decimals,
        logoUrl: token.logoURI || '',
        logoURI: token.logoURI || '',
      }))
    }
  }, [chainId])

  const filteredTokens = availableTokens.filter((token: any) =>
    token.symbol?.toLowerCase().includes(search.toLowerCase()) ||
    token.name?.toLowerCase().includes(search.toLowerCase())
  )

  const selectedToken = useMemo(() => {
    if (!value) return null
    // Try to find in available tokens first
    const found = availableTokens.find((token: any) => 
      token.address?.toLowerCase() === value.toLowerCase()
    )
    if (found) return found
    
    // Fallback: try to get from base tokens
    const baseToken = getBaseTokenByAddress(value)
    if (baseToken) {
      return {
        symbol: baseToken.symbol,
        name: baseToken.name,
        address: baseToken.address.toLowerCase(),
        decimals: baseToken.decimals,
        logoUrl: baseToken.logoURI || '',
        logoURI: baseToken.logoURI || '',
      }
    }
    return null
  }, [value, availableTokens])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-auto py-2.5 px-4 rounded-lg border-border bg-background hover:bg-accent justify-between gap-2 min-w-[140px]",
            className
          )}
        >
          {selectedToken ? (
            <div className="flex items-center gap-2">
              {selectedToken.logoUrl && (
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={selectedToken.logoUrl}
                    alt={selectedToken.symbol}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <span className="font-medium">{selectedToken.symbol}</span>
            </div>
          ) : (
            <span className="text-muted-foreground">Select token</span>
          )}
          <ChevronDown className="h-4 w-4 flex-shrink-0" />
        </Button>
      </DialogTrigger>
      <DialogContent variant="glass-apple" className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select Token</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            variant="glass"
            placeholder="Search token..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="max-h-[400px] overflow-y-auto space-y-1">
            {filteredTokens.map((token: any) => (
              <Button
                key={token.address}
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => {
                  onChange(token.address)
                  setOpen(false)
                }}
              >
                {token.logoUrl && (
                  <img
                    src={token.logoUrl}
                    alt={token.symbol}
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <div className="flex flex-col items-start">
                  <span className="font-medium">{token.symbol}</span>
                  <span className="text-xs text-muted-foreground">{token.name}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
