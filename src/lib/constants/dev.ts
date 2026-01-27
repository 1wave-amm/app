export const environment: 'testing' | 'production' =
  (import.meta.env.VITE_ENVIRONMENT as 'testing' | 'production') || 'production'

export const STATS_API_BASE_URL =
  import.meta.env.VITE_STATS_API_BASE_URL ||
  import.meta.env.VITE_PUBLIC_STATS_API_URL ||
  "https://factor-studio-stats-api-staging.fly.dev"

