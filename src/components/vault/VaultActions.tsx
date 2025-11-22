import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"

interface Token {
  address: string
  symbol: string
  name: string
  logoURI?: string
  decimals: number
}

interface Vault {
  address: string
  name: string
  chainId: number
}

interface VaultActionsProps {
  vault: Vault
  mode: "deposit" | "withdraw"
  availableTokens: Token[]
}

export function VaultActions({ vault, mode, availableTokens }: VaultActionsProps) {
  const [selectedToken, setSelectedToken] = useState<Token | null>(
    availableTokens[0] || null
  )
  const [amount, setAmount] = useState("")
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const handleAction = async () => {
    if (!selectedToken || !amount) return

    // Check if wallet is connected
    if (!isConnected && openConnectModal) {
      openConnectModal()
      return
    }

    if (!isConnected) return

    // TODO: Implement deposit/withdraw logic using SDK
    console.log(`${mode}`, {
      vault: vault.address,
      token: selectedToken.address,
      amount,
      chainId: vault.chainId,
    })
  }

  if (availableTokens.length === 0) {
    return (
      <Card variant="glass" className="p-6 text-center">
        <p className="text-muted-foreground">
          No tokens available for {mode}
        </p>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Token Selector */}
      <div className="space-y-2">
        <Label>Token</Label>
        <Select
          value={selectedToken?.address}
          onValueChange={(value) => {
            const token = availableTokens.find((t) => t.address === value)
            setSelectedToken(token || null)
          }}
        >
          <SelectTrigger className="glass">
            <SelectValue placeholder="Select token">
              {selectedToken && (
                <div className="flex items-center gap-2">
                  {selectedToken.logoURI && (
                    <img
                      src={selectedToken.logoURI}
                      alt={selectedToken.symbol}
                      className="w-5 h-5 rounded-full"
                    />
                  )}
                  <span>{selectedToken.symbol}</span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="glass-apple">
            {availableTokens.map((token) => (
              <SelectItem key={token.address} value={token.address}>
                <div className="flex items-center gap-2">
                  {token.logoURI && (
                    <img
                      src={token.logoURI}
                      alt={token.symbol}
                      className="w-5 h-5 rounded-full"
                    />
                  )}
                  <span>{token.symbol}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Amount Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Amount</Label>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 text-xs"
            onClick={() => {
              // TODO: Set max balance
              setAmount("")
            }}
          >
            Max
          </Button>
        </div>
        <Input
          variant="glass"
          type="number"
          placeholder="0.0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Preview */}
      {amount && selectedToken && (
        <Card variant="glass" className="p-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">You {mode === "deposit" ? "deposit" : "receive"}:</span>
              <span className="font-medium">
                {amount} {selectedToken.symbol}
              </span>
            </div>
          </div>
        </Card>
      )}

      {/* Action Button */}
      <Button
        variant="glass-apple"
        className="w-full rounded-full"
        size="lg"
        onClick={handleAction}
        disabled={!selectedToken || !amount || parseFloat(amount) <= 0}
      >
        {mode === "deposit" ? "Deposit" : "Withdraw"}
      </Button>
    </div>
  )
}

