import { Header } from "./Header"
import { MobileFooterNav } from "./MobileFooterNav"
import { Container } from "../atomic/Container"
import { AnimatedWaveBackground } from "../landing/AnimatedWaveBackground"
import { DemoNotice } from "../common/DemoNotice"

interface MainLayoutProps {
  children: React.ReactNode
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

export function MainLayout({ children, maxWidth = "2xl" }: MainLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden pb-20 md:pb-0">
      <AnimatedWaveBackground />
      <Header />
      <div className="relative z-10">
        <div className="pt-20 px-4">
          <Container maxWidth={maxWidth}>
            <DemoNotice />
          </Container>
        </div>
        <main className="py-8 pb-20 md:pb-8">
          <Container maxWidth={maxWidth}>
            {children}
          </Container>
        </main>
      </div>
      {/* Mobile Footer Navigation - only visible on mobile when wallet is connected */}
      <MobileFooterNav />
    </div>
  )
}

