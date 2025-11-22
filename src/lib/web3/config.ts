import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base } from 'wagmi/chains';

// Configurazione delle chain supportate - solo BASE
export const chains = [base] as const;

// Configurazione di Wagmi e RainbowKit
export const config = getDefaultConfig({
  appName: 'Wave - Liquidity as a Service',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains,
  ssr: false, // Non usiamo SSR con Vite
});

