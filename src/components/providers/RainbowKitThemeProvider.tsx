import { ReactNode, useEffect, useState } from "react"
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit"

interface RainbowKitThemeProviderProps {
  children: ReactNode
}

// Tema personalizzato per RainbowKit con colori aqua
const createWaveTheme = (baseTheme: ReturnType<typeof darkTheme | typeof lightTheme>) => {
  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      accentColor: "#00D9FF", // Aqua cyan
    },
    fonts: {
      ...baseTheme.fonts,
      body: "Inter, system-ui, sans-serif",
    },
    shadows: {
      ...baseTheme.shadows,
      connectButton: "0 4px 12px rgba(0, 217, 255, 0.2)",
    },
  }
}

const waveRKDark = createWaveTheme(darkTheme())
const waveRKLight = createWaveTheme(lightTheme())

export function RainbowKitThemeProvider({ children }: RainbowKitThemeProviderProps) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
    }
    return false
  })

  useEffect(() => {
    // Ascolta i cambiamenti del tema
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <RainbowKitProvider theme={isDark ? waveRKDark : waveRKLight}>
      {children}
    </RainbowKitProvider>
  )
}

