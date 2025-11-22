import { useNavigate } from "react-router-dom"
import { useAccount } from "wagmi"
import { useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { CenteredLayout } from "@/components/atomic/CenteredLayout"

export function Login() {
  const navigate = useNavigate()
  const { isConnected } = useAccount()

  useEffect(() => {
    if (isConnected) {
      navigate("/swap")
    }
  }, [isConnected, navigate])

  return (
    <CenteredLayout>
      <Card variant="glass-apple" className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-aqua-500 to-aqua-600 bg-clip-text text-transparent">
            Welcome to Wave
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Liquidity as a Service powered by 1inch Aqua Protocol
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Connect your wallet to get started
            </p>
            <div className="flex justify-center pt-4">
              <ConnectButton />
            </div>
          </div>
        </CardContent>
      </Card>
    </CenteredLayout>
  )
}

