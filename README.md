# Wave - Liquidity as a Service

React frontend for Wave, a **permissionless liquidity-as-a-service** platform with on-chain rebalancing and aggregated mini-DEX, built on **1inch Aqua Protocol**.

## 🚀 Tech Stack

- **React 18** with **TypeScript**
- **Vite** as build tool
- **pnpm** as package manager
- **viem** for Ethereum interactions
- **wagmi** for React hooks for Web3
- **RainbowKit** for wallet connection
- **Tailwind CSS** for styling
- **React Query** for data fetching

## 📦 Installation

```bash
# Install dependencies
pnpm install
```

## ⚙️ Configuration

1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Get a WalletConnect Project ID from [https://cloud.walletconnect.com/](https://cloud.walletconnect.com/) and add it to the `.env` file:
```
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

## 🏃 Running the Project

```bash
# Development mode
pnpm dev

# Production build
pnpm build

# Preview build
pnpm preview
```

## 📁 Project Structure

```
app/
├── src/
│   ├── lib/
│   │   └── web3/
│   │       └── config.ts      # Wagmi and RainbowKit configuration
│   ├── App.tsx                # Main component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles (Tailwind)
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🔌 Web3 Configuration

The project is configured with:

- **Supported chains**: Ethereum Mainnet, Sepolia, Arbitrum, Optimism, Base
- **Supported wallets**: All wallets compatible with WalletConnect (MetaMask, WalletConnect, Coinbase Wallet, etc.)

Configuration is located in `src/lib/web3/config.ts`.

## 🎨 Design System

The project uses Tailwind CSS with a custom design system based on the DeFi theme:

- **Primary colors**: Sky blue (Aqua-inspired)
- **Background**: Dark slate (#0f172a)
- **Card background**: #1e293b

See `tailwind.config.js` for complete details.

## 📚 Documentation

- [Frontend Design](./WAVE_FRONTEND_DESIGN.md)
- [Aqua Protocol Analysis](./AQUA_PROTOCOL_ANALISI.md)
- [Smart Contract Details](./AQUA_SMART_CONTRACTS_DETAILS.md)

## 🛠️ Development

### Adding new dependencies

```bash
pnpm add <package-name>
```

### Adding development dependencies

```bash
pnpm add -D <package-name>
```

## 📝 Notes

- The project uses **Vite** instead of Create React App for better performance
- **RainbowKit** automatically handles wallet connection and UI
- **wagmi** provides React hooks to interact with the blockchain
- **viem** is the underlying library for low-level operations

