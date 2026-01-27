import { useState } from "react"
import { VaultInfoCard } from "./VaultInfoCard"
import { DepositWithdrawCard } from "./DepositWithdrawCard"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useDisconnect } from "wagmi"
import { VaultWidgetTheme, defaultTheme } from "./theme"

export interface VaultWidgetConfig {
  vaultAddress: string
  theme?: Partial<VaultWidgetTheme>
  showDeposit?: boolean
  showWithdraw?: boolean
  hideAddress?: boolean
  showTokenChips?: boolean
  showAquaPairs?: boolean
  showWalletConnect?: boolean
  hideFees?: boolean
  hidePerformance?: boolean
  showTVL?: boolean
  customLabels?: {
    vaultName?: string
    depositLabel?: string
    withdrawLabel?: string
    [key: string]: string | undefined
  }
}

interface VaultWidgetProps {
  config: VaultWidgetConfig
}

export function VaultWidget({ config }: VaultWidgetProps) {
  const [activeTab, setActiveTab] = useState<"deposit" | "withdraw">("deposit")
  const theme = { ...defaultTheme, ...config.theme }
  const { disconnect } = useDisconnect()

  return (
    <div className="vault-widget" style={{ fontFamily: theme.fontFamily }}>
      <div style={{ position: "relative" }}>
        {config.showWalletConnect !== false && (
          <div style={{ position: "absolute", top: "-24px", right: "10px", zIndex: 2 }}>
            <ConnectButton.Custom>
              {({ account, openConnectModal }) => (
                <button
                  type="button"
                  onClick={() => {
                    if (account) {
                      disconnect()
                    } else {
                      openConnectModal()
                    }
                  }}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    margin: 0,
                    color: theme.textSecondary,
                    fontSize: "10px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  {account ? "Disconnect" : "Connect Wallet"}
                </button>
              )}
            </ConnectButton.Custom>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VaultInfoCard 
          vaultAddress={config.vaultAddress} 
          theme={theme} 
          customLabels={config.customLabels} 
          hideAddress={config.hideAddress}
          showTokenChips={config.showTokenChips}
          showAquaPairs={config.showAquaPairs}
          hideFees={config.hideFees}
          hidePerformance={config.hidePerformance}
          showTVL={config.showTVL}
        />
        {(config.showDeposit !== false || config.showWithdraw !== false) && (
          <DepositWithdrawCard
            vaultAddress={config.vaultAddress}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            showDeposit={config.showDeposit !== false}
            showWithdraw={config.showWithdraw !== false}
            theme={theme}
            customLabels={config.customLabels}
          />
        )}
        </div>
      </div>
    </div>
  )
}
