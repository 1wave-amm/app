import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Controlla se c'è una preferenza salvata
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme | null
      if (saved) return saved
      
      // Altrimenti usa la preferenza di sistema
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }
    return "light"
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  const setLight = () => setTheme("light")
  const setDark = () => setTheme("dark")

  return {
    theme,
    toggleTheme,
    setLight,
    setDark,
  }
}


