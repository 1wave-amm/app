# Wave - Liquidity as a Service

Frontend React per Wave, una piattaforma **liquidity-as-a-service permissionless** con rebalancing on-chain e mini-DEX aggregato, costruita su **1inch Aqua Protocol**.

## 🚀 Stack Tecnologico

- **React 18** con **TypeScript**
- **Vite** come build tool
- **pnpm** come package manager
- **viem** per interazioni con Ethereum
- **wagmi** per hooks React per Web3
- **RainbowKit** per connessione wallet
- **Tailwind CSS** per styling
- **React Query** per data fetching

## 📦 Installazione

```bash
# Installa le dipendenze
pnpm install
```

## ⚙️ Configurazione

1. Copia il file `.env.example` in `.env`:
```bash
cp .env.example .env
```

2. Ottieni un WalletConnect Project ID da [https://cloud.walletconnect.com/](https://cloud.walletconnect.com/) e aggiungilo al file `.env`:
```
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

## 🏃 Avvio del Progetto

```bash
# Modalità sviluppo
pnpm dev

# Build per produzione
pnpm build

# Preview della build
pnpm preview
```

## 📁 Struttura del Progetto

```
app/
├── src/
│   ├── lib/
│   │   └── web3/
│   │       └── config.ts      # Configurazione Wagmi e RainbowKit
│   ├── App.tsx                # Componente principale
│   ├── main.tsx               # Entry point
│   └── index.css              # Stili globali (Tailwind)
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🔌 Configurazione Web3

Il progetto è configurato con:

- **Chain supportate**: Ethereum Mainnet, Sepolia, Arbitrum, Optimism, Base
- **Wallet supportati**: Tutti i wallet compatibili con WalletConnect (MetaMask, WalletConnect, Coinbase Wallet, etc.)

La configurazione si trova in `src/lib/web3/config.ts`.

## 🎨 Design System

Il progetto usa Tailwind CSS con un design system personalizzato basato sul tema DeFi:

- **Colori primari**: Sky blue (Aqua-inspired)
- **Background**: Dark slate (#0f172a)
- **Card background**: #1e293b

Vedi `tailwind.config.js` per i dettagli completi.

## 📚 Documentazione

- [Design Frontend](./WAVE_FRONTEND_DESIGN.md)
- [Analisi Protocollo Aqua](./AQUA_PROTOCOL_ANALISI.md)
- [Dettagli Smart Contract](./AQUA_SMART_CONTRACTS_DETAILS.md)

## 🛠️ Sviluppo

### Aggiungere nuove dipendenze

```bash
pnpm add <package-name>
```

### Aggiungere dipendenze di sviluppo

```bash
pnpm add -D <package-name>
```

## 📝 Note

- Il progetto usa **Vite** invece di Create React App per performance migliori
- **RainbowKit** gestisce automaticamente la connessione wallet e la UI
- **wagmi** fornisce hooks React per interagire con la blockchain
- **viem** è la libreria sottostante per le operazioni low-level

