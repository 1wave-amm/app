import { Link } from "react-router-dom"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import logoImage from "@/logo/logo.png"
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const handleAddLiquidityClick = (e: React.MouseEvent) => {
    if (!isConnected && openConnectModal) {
      e.preventDefault()
      openConnectModal()
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-aqua-500/20 glass-apple backdrop-blur-xl bg-background/80">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1 group">
            <span className="text-black dark:text-white font-bold h-8 sm:h-10 leading-none flex items-center transition-transform group-hover:scale-105">1</span>
            <img
              src={logoImage}
              alt="Wave Logo"
              className="h-8 sm:h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link to="/swap">
              <Button
                variant="ghost"
                className="rounded-full hover:glass-apple transition-all"
              >
                Swap
              </Button>
            </Link>
            <Link to="/create-vault">
              <Button
                variant="ghost"
                className="rounded-full hover:glass-apple transition-all"
              >
                Create Vault
              </Button>
            </Link>
            <Link to="/vaults" onClick={handleAddLiquidityClick}>
              <Button
                variant="ghost"
                className="rounded-full hover:glass-apple transition-all"
              >
                Add Liquidity
              </Button>
            </Link>
          </nav>

          {/* Right Side - Wallet Connect & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Wallet Connect - Hidden on mobile, shown on tablet+ */}
            <div className="hidden sm:block">
              <ConnectButton />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-aqua-500/20 py-4 space-y-2">
            <Link
              to="/swap"
              className="block px-4 py-2 rounded-lg hover:glass-apple transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Swap
            </Link>
            <Link
              to="/create-vault"
              className="block px-4 py-2 rounded-lg hover:glass-apple transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create Vault
            </Link>
            <Link
              to="/vaults"
              className="block px-4 py-2 rounded-lg hover:glass-apple transition-all"
              onClick={handleAddLiquidityClick}
            >
              Add Liquidity
            </Link>
            <div className="px-4 pt-2 border-t border-aqua-500/20">
              <ConnectButton />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

