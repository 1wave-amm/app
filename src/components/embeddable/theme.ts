export interface VaultWidgetTheme {
  // Colors
  primary: string
  secondary: string
  background: string
  cardBackground: string
  border: string
  text: string
  textSecondary: string
  success: string
  error: string
  warning: string
  
  // Typography
  fontFamily: string
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
  }
  
  // Spacing
  borderRadius: string
  padding: string
  gap: string
  
  // Input
  inputColor?: string
}

export const defaultTheme: VaultWidgetTheme = {
  primary: "#00D9FF",
  secondary: "#6366f1",
  background: "#0a0a0a",
  cardBackground: "rgba(0, 0, 0, 0.4)",
  border: "rgba(255, 255, 255, 0.1)",
  text: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  success: "#10b981",
  error: "#ef4444",
  warning: "#f59e0b",
  
  fontFamily: "system-ui, -apple-system, sans-serif",
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  
  borderRadius: "0.75rem",
  padding: "1rem",
  gap: "1rem",
}
