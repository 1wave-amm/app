/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALLETCONNECT_PROJECT_ID?: string
  readonly VITE_STATS_API_BASE_URL?: string
  readonly VITE_NPM_TOKEN?: string
  readonly VITE_ALCHEMY_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

