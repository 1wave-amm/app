import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css'
import App from './App.tsx'
import { config } from './lib/web3/config.ts'
import { RainbowKitThemeProvider } from './components/providers/RainbowKitThemeProvider.tsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitThemeProvider>
          <App />
        </RainbowKitThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)

