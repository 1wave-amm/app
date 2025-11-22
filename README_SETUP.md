# Wave - Setup Guide

## 🚀 Struttura dell'Applicazione

L'applicazione è stata creata con una struttura modulare e componenti atomic riutilizzabili.

### 📁 Struttura Directory

```
src/
├── components/
│   ├── atomic/          # Componenti atomic riutilizzabili
│   │   ├── Container.tsx
│   │   └── CenteredLayout.tsx
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   └── MainLayout.tsx
│   ├── swap/            # Swap interface components
│   │   ├── SwapInterface.tsx
│   │   └── TokenSelector.tsx
│   ├── vault/           # Vault management components
│   │   ├── CreateVaultWizard.tsx
│   │   ├── TokenMultiSelect.tsx
│   │   └── VaultActions.tsx
│   └── ui/              # shadcn/ui components con varianti glass
│
├── pages/               # Route pages
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── CreateVault.tsx
│   ├── Vaults.tsx
│   └── VaultDetail.tsx
│
└── lib/                 # Utilities
    └── utils.ts
```

## 🎨 Design System

### Componenti Glassmorphism

Tutti i componenti shadcn/ui supportano varianti glassmorphism:

- **Card**: `variant="glass" | "glass-strong" | "glass-apple"`
- **Button**: `variant="glass" | "glass-apple"`
- **Input**: `variant="glass"`
- **Textarea**: `variant="glass"`
- **Dialog**: `variant="glass" | "glass-apple"`
- **Select**: `variant="glass" | "glass-apple"` (sul SelectContent)

### Utility Classes CSS

Classi utility disponibili in `src/index.css`:

- `.glass` - Glass effect standard
- `.glass-strong` - Glass effect più forte
- `.glass-apple` - Apple-style liquid glass
- `.glass-hover` - Hover effect per glass components

## 🔐 Routing

L'applicazione usa React Router con route protette:

- `/login` - Pagina di login/registrazione
- `/dashboard` - Dashboard principale con swap
- `/create-vault` - Wizard per creare vault
- `/vaults` - Lista di tutti i vaults
- `/vaults/:address` - Dettaglio vault con deposit/withdraw

## 📦 Dipendenze Principali

- `react-router-dom` - Routing
- `@factordao/tokenlist` - Token list e metadata
- `shadcn/ui` - Componenti UI
- `wagmi` + `@rainbow-me/rainbowkit` - Web3 integration
- `@tanstack/react-query` - Data fetching

## 🔧 Variabili d'Ambiente

Assicurati di avere nel file `.env`:

```env
VITE_STATS_API_BASE_URL=your_api_url
VITE_NPM_TOKEN=your_npm_token (se necessario)
```

## 🎯 Funzionalità Implementate

### ✅ Login/Registrazione
- Pagina di login con wallet connection
- Redirect automatico alla dashboard quando connesso

### ✅ Dashboard
- Swap interface simile a Uniswap
- Token selector con ricerca
- Input con glass effect

### ✅ Create Vault Wizard
- Step 1: Basic Info (nome con prefisso "ethGlobal - wave: ")
- Step 2: Fees (deposit, withdraw, management)
- Step 3: Whitelisted Tokens (multi-select con chips)
- Step 4: Review e deploy
- Generazione automatica delle pairs dai token selezionati

### ✅ Vaults List
- Fetch da `VITE_STATS_API_BASE_URL/strategies`
- Filtro automatico per vault con nome che inizia con "ethGlobal - wave: "
- Search bar per filtrare vaults
- Card con glass effect

### ✅ Vault Detail
- Informazioni complete del vault
- Tab Deposit/Withdraw
- Token selector per deposit/withdraw
- Preview delle transazioni

## 🚧 TODO - Integrazioni SDK

Le seguenti funzionalità richiedono integrazione con l'SDK:

1. **Create Vault Wizard** - Step 4: Deploy vault
   - Integrare con `@factordao/sdk-studio` per deploy
   - Implementare transazioni multiple (deploy, configure, etc.)

2. **Vault Actions** - Deposit/Withdraw
   - Integrare con `useProVaultDeposit` e `useProVaultWithdraw`
   - Gestire approvazioni token
   - Mostrare preview accurato

3. **Swap Interface**
   - Integrare con Aqua SDK per simulazione swap
   - Calcolare output amount
   - Gestire routing multi-hop

## 🎨 Styling

L'app usa:
- **Tailwind CSS** per styling
- **Glassmorphism effects** per tutti i componenti
- **Gradient backgrounds** per il layout principale
- **Rounded corners** (rounded-full per buttons, rounded-lg per cards)

## 📝 Note

- Tutti i nomi vault devono iniziare con "ethGlobal - wave: " per essere riconosciuti
- I token vengono caricati da `@factordao/tokenlist` usando il chainId corrente
- L'app è responsive e ottimizzata per mobile


