# Wave - Design Frontend, UI e UX

## 📋 Indice
1. [Panoramica](#panoramica)
2. [Architettura Frontend](#architettura)
3. [Design System](#design-system)
4. [Componenti UI Principali](#componenti)
5. [Flussi Utente](#flussi-utente)
6. [Integrazione Aqua SDK](#integrazione-aqua)
7. [Mini-DEX Aggregato](#mini-dex)
8. [Visualizzazione Rebalancing](#rebalancing-ui)
9. [Roadmap Implementazione](#roadmap)

---

## 🎯 Panoramica {#panoramica}

**Wave** è un'interfaccia utente moderna e intuitiva per creare e gestire Vaults di liquidità permissionless, costruita su **1inch Aqua Protocol**. L'applicazione permette agli utenti di:

- ✅ Creare Vaults permissionless con configurazione personalizzata
- ✅ Depositare e prelevare token ricevendo shares
- ✅ Eseguire swap tramite mini-DEX aggregato
- ✅ Visualizzare e gestire rebalancing on-chain
- ✅ Monitorare performance e impermanent loss

### Stack Tecnologico

- **React 18** + **TypeScript** - UI framework
- **Vite** - Build tool veloce
- **wagmi** + **RainbowKit** - Web3 integration
- **Tailwind CSS** - Styling utility-first
- **React Query** - Data fetching e caching
- **1inch Aqua SDK** - Integrazione protocollo
- **viem** - Ethereum interactions

---

## 🏗️ Architettura Frontend {#architettura}

### Struttura Directory

```
src/
├── components/           # Componenti UI riutilizzabili
│   ├── vault/
│   │   ├── VaultCard.tsx
│   │   ├── VaultCreator.tsx
│   │   ├── VaultDashboard.tsx
│   │   └── VaultSettings.tsx
│   ├── swap/
│   │   ├── SwapInterface.tsx
│   │   ├── TokenSelector.tsx
│   │   ├── PriceSimulator.tsx
│   │   └── SwapHistory.tsx
│   ├── rebalancing/
│   │   ├── RebalancingStatus.tsx
│   │   ├── RebalancingTrigger.tsx
│   │   └── RebalancingHistory.tsx
│   ├── shares/
│   │   ├── SharesDisplay.tsx
│   │   ├── DepositForm.tsx
│   │   └── WithdrawForm.tsx
│   └── common/
│       ├── Card.tsx
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Loading.tsx
├── pages/               # Pagine principali
│   ├── HomePage.tsx
│   ├── VaultsPage.tsx
│   ├── CreateVaultPage.tsx
│   ├── VaultDetailPage.tsx
│   └── SwapPage.tsx
├── hooks/               # Custom React hooks
│   ├── useAqua.ts
│   ├── useVault.ts
│   ├── useSwap.ts
│   ├── useRebalancing.ts
│   └── useOracle.ts
├── lib/
│   ├── web3/
│   │   └── config.ts
│   ├── aqua/
│   │   ├── client.ts
│   │   ├── strategies.ts
│   │   └── types.ts
│   └── utils/
│       ├── format.ts
│       └── calculations.ts
├── stores/              # State management (Zustand o Context)
│   ├── vaultStore.ts
│   └── swapStore.ts
└── App.tsx
```

### Architettura a Livelli

```
┌─────────────────────────────────────────┐
│         UI Layer (React Components)     │
│  - VaultCard, SwapInterface, etc.       │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      Hooks Layer (Custom Hooks)        │
│  - useAqua, useVault, useSwap          │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      SDK Layer (Aqua Integration)      │
│  - Aqua Client, Strategy Builder       │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      Web3 Layer (wagmi + viem)         │
│  - Contract calls, Transactions        │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│      Blockchain (Aqua Protocol)        │
└────────────────────────────────────────┘
```

---

## 🎨 Design System {#design-system}

### Palette Colori

```typescript
// tailwind.config.js
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',  // Sky blue (Aqua-inspired)
    600: '#0284c7',
    700: '#0369a1',
  },
  background: {
    default: '#0f172a',  // Slate 900
    card: '#1e293b',     // Slate 800
    hover: '#334155',    // Slate 700
  },
  text: {
    primary: '#f1f5f9',   // Slate 100
    secondary: '#cbd5e1', // Slate 300
    muted: '#94a3b8',     // Slate 400
  },
  success: '#10b981',    // Green
  warning: '#f59e0b',    // Amber
  error: '#ef4444',      // Red
}
```

### Tipografia

- **Font principale**: Inter o System UI
- **Heading**: Bold, 24-32px
- **Body**: Regular, 14-16px
- **Monospace**: Per indirizzi e numeri (JetBrains Mono)

### Componenti Base

#### Card
```tsx
<div className="bg-background-card rounded-lg p-6 shadow-lg border border-background-hover">
  {children}
</div>
```

#### Button
```tsx
<button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
  {label}
</button>
```

#### Input
```tsx
<input className="bg-background-hover border border-background-card rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500" />
```

---

## 🧩 Componenti UI Principali {#componenti}

### 1. VaultCard Component

**Scopo**: Mostra preview di un Vault nella lista

```tsx
interface VaultCardProps {
  vault: Vault;
  onSelect: (vaultId: string) => void;
}

// Features:
// - Nome e descrizione Vault
// - TVL (Total Value Locked)
// - Token supportati (badges)
// - Performance (APY, impermanent loss)
// - Quick actions (Deposit, Swap)
```

**Layout**:
```
┌─────────────────────────────────────┐
│  Vault Name          [ETH/USDC]     │
│  Description...                      │
│                                      │
│  💰 TVL: $1.2M    📈 APY: 8.5%      │
│                                      │
│  [BTC] [ETH] [USDC]                  │
│                                      │
│  [Deposit] [Swap] [View Details →]   │
└─────────────────────────────────────┘
```

### 2. VaultCreator Component

**Scopo**: Wizard per creare nuovo Vault permissionless

**Step 1: Configurazione Base**
- Nome Vault
- Descrizione
- Token ammessi (multi-select)
- Pair da abilitare

**Step 2: Fee Structure**
- Deposit fee (0-5%)
- Withdraw fee (0-5%)
- Management fee (0-2%)
- Fee receiver address

**Step 3: Target Weights (opzionale)**
- Per ogni token: target weight %
- Se non specificato: equal weights

**Step 4: Review & Deploy**
- Preview configurazione
- Stima gas cost
- Deploy button

### 3. SwapInterface Component

**Scopo**: Interfaccia swap del mini-DEX aggregato

```tsx
interface SwapInterfaceProps {
  vaults: Vault[];
  onSwap: (swapParams: SwapParams) => void;
}

// Features:
// - Token selector (from/to)
// - Amount input
// - Price simulation (real-time)
// - Slippage tolerance
// - Vault selector (quale Vault usare)
// - Route visualization
```

**Layout**:
```
┌─────────────────────────────────────┐
│  Swap                               │
│                                      │
│  From: [ETH ▼]  [100.0]             │
│         Balance: 1.5 ETH             │
│                                      │
│  ↓                                   │
│                                      │
│  To:   [USDC ▼]  [≈ 3,200]          │
│        1 ETH = 3,200 USDC            │
│                                      │
│  Vault: [Select Vault ▼]             │
│                                      │
│  Route: ETH → USDC (via Vault #123)  │
│  Slippage: 0.5%                      │
│                                      │
│  [Swap]                              │
└─────────────────────────────────────┘
```

### 4. VaultDashboard Component

**Scopo**: Dashboard dettagliata di un singolo Vault

**Sezioni**:
1. **Overview**
   - TVL, Shares totali, Performance
   - Grafico TVL nel tempo
   - Token composition (pie chart)

2. **My Position**
   - Shares possedute
   - Valore in USD
   - Depositi/Prelevi storici

3. **Rebalancing Status**
   - Ultimo rebalance
   - Prossimo rebalance (se schedulato)
   - Trigger manuale

4. **Swap Activity**
   - Ultimi swap eseguiti
   - Volume 24h
   - Fee raccolte

### 5. RebalancingStatus Component

**Scopo**: Visualizzazione stato rebalancing

```tsx
interface RebalancingStatusProps {
  vault: Vault;
  currentWeights: TokenWeight[];
  targetWeights: TokenWeight[];
  lastRebalance: Date;
}

// Features:
// - Barre di confronto current vs target
// - Delta da rebalance
// - Trigger button (permissionless)
// - History timeline
```

**Layout**:
```
┌─────────────────────────────────────┐
│  Rebalancing Status                 │
│                                      │
│  Current → Target                    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  BTC: 25% → 30%  [+5%]              │
│  ETH: 35% → 30%  [-5%]               │
│  USDC: 40% → 40%  [=]                │
│                                      │
│  Last rebalance: 2h ago              │
│  [Trigger Rebalance]                 │
└─────────────────────────────────────┘
```

---

## 🔄 Flussi Utente {#flussi-utente}

### Flow 1: Creazione Vault

```
1. Homepage
   └─> Click "Create Vault"
   
2. VaultCreator Wizard
   ├─> Step 1: Nome, token, pair
   ├─> Step 2: Fee structure
   ├─> Step 3: Target weights (opzionale)
   └─> Step 4: Review & Deploy
   
3. Wallet Interaction
   ├─> Approve token a Aqua (se necessario)
   ├─> Deploy Vault contract
   └─> Ship strategy su Aqua
   
4. Success
   └─> Redirect a VaultDetailPage
```

**UI States**:
- Loading: "Deploying Vault..."
- Success: "Vault created! Redirecting..."
- Error: Mostra errore con retry button

### Flow 2: Deposito in Vault

```
1. VaultDetailPage
   └─> Click "Deposit"
   
2. DepositForm Modal
   ├─> Select token
   ├─> Enter amount
   ├─> Preview: shares da ricevere
   └─> Confirm
   
3. Wallet Interaction
   ├─> Approve token (se necessario)
   ├─> Deposit transaction
   └─> Auto-rebalance trigger (opzionale)
   
4. Success
   └─> Update UI: shares, TVL, composition
```

**Preview Calculation**:
```typescript
// Calcola shares da ricevere
const sharesToReceive = (amount * totalShares) / totalValue;
// Mostra preview in real-time
```

### Flow 3: Swap tramite Mini-DEX

```
1. SwapPage o VaultDetailPage
   └─> Click "Swap"
   
2. SwapInterface
   ├─> Select Vault (o auto-select migliore)
   ├─> Select token from/to
   ├─> Enter amount
   ├─> Price simulation (real-time)
   └─> Review route
   
3. Wallet Interaction
   ├─> Approve token (se necessario)
   ├─> Execute swap
   │   ├─> Aqua pull() per token output
   │   └─> Aqua push() per token input
   └─> Auto-rebalance (se necessario)
   
4. Success
   └─> Show transaction hash, update balances
```

**Price Simulation**:
- Usa Aqua SDK per simulare swap
- Mostra price impact, slippage
- Aggiorna in real-time mentre l'utente digita

### Flow 4: Withdraw da Vault

```
1. VaultDetailPage
   └─> Click "Withdraw"
   
2. WithdrawForm Modal
   ├─> Select token output (o proporzionale)
   ├─> Enter shares o amount
   ├─> Preview: token da ricevere
   └─> Confirm
   
3. Wallet Interaction
   ├─> Withdraw transaction
   └─> Auto-rebalance (se necessario)
   
4. Success
   └─> Update UI: shares, TVL
```

### Flow 5: Rebalancing Manuale

```
1. VaultDetailPage → Rebalancing Section
   └─> Click "Trigger Rebalance"
   
2. RebalancingPreview Modal
   ├─> Show current vs target weights
   ├─> Show swap operations necessarie
   ├─> Estimate gas cost
   └─> Confirm
   
3. Wallet Interaction
   ├─> Execute rebalancing swaps (multi-step)
   └─> Update Aqua strategy
   
4. Success
   └─> Update weights, show new composition
```

---

## 🔌 Integrazione Aqua SDK {#integrazione-aqua}

### Setup Aqua Client

```typescript
// src/lib/aqua/client.ts
import { AquaClient } from '@1inch/aqua-sdk';

export const aquaClient = new AquaClient({
  chainId: 1, // Ethereum mainnet
  rpcUrl: process.env.VITE_RPC_URL,
});
```

### Custom Hook: useAqua

```typescript
// src/hooks/useAqua.ts
import { useAccount, useWriteContract } from 'wagmi';
import { aquaClient } from '@/lib/aqua/client';

export function useAqua() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const shipStrategy = async (
    app: string,
    strategy: StrategyConfig,
    tokens: string[],
    amounts: bigint[]
  ) => {
    // Calcola strategy hash
    const strategyHash = aquaClient.computeStrategyHash(strategy);
    
    // Prepara transazione
    const tx = await aquaClient.ship({
      app,
      strategy,
      tokens,
      amounts,
    });
    
    return writeContract(tx);
  };

  const getBalance = async (
    maker: string,
    app: string,
    strategyHash: string,
    token: string
  ) => {
    return aquaClient.getBalance(maker, app, strategyHash, token);
  };

  const simulateSwap = async (
    strategyHash: string,
    tokenIn: string,
    tokenOut: string,
    amountIn: bigint
  ) => {
    return aquaClient.simulateSwap({
      strategyHash,
      tokenIn,
      tokenOut,
      amountIn,
    });
  };

  return {
    shipStrategy,
    getBalance,
    simulateSwap,
    // ... altre funzioni
  };
}
```

### Custom Hook: useVault

```typescript
// src/hooks/useVault.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { useAqua } from './useAqua';
import { vaultContract } from '@/lib/contracts';

export function useVault(vaultId: string) {
  const aqua = useAqua();
  
  // Fetch vault data
  const { data: vault } = useQuery({
    queryKey: ['vault', vaultId],
    queryFn: async () => {
      // Leggi dati dal contratto Vault
      const config = await vaultContract.read.getConfig(vaultId);
      const strategyHash = await vaultContract.read.getStrategyHash(vaultId);
      
      // Leggi saldi virtuali da Aqua
      const balances = await Promise.all(
        config.tokens.map(token => 
          aqua.getBalance(config.manager, vaultContract.address, strategyHash, token)
        )
      );
      
      return {
        ...config,
        strategyHash,
        balances,
      };
    },
  });

  // Deposit mutation
  const deposit = useMutation({
    mutationFn: async ({ token, amount }: { token: string; amount: bigint }) => {
      // 1. Approve token se necessario
      // 2. Chiama deposit su Vault contract
      // 3. Trigger rebalance se necessario
    },
  });

  return {
    vault,
    deposit,
    // ... altre operazioni
  };
}
```

### Custom Hook: useSwap

```typescript
// src/hooks/useSwap.ts
import { useAqua } from './useAqua';
import { useQuery } from '@tanstack/react-query';

export function useSwap(vaultId: string) {
  const aqua = useAqua();
  
  // Simula swap in real-time
  const simulateSwap = useQuery({
    queryKey: ['swap-simulation', vaultId, tokenIn, tokenOut, amountIn],
    queryFn: async () => {
      const vault = await getVault(vaultId);
      return aqua.simulateSwap(
        vault.strategyHash,
        tokenIn,
        tokenOut,
        amountIn
      );
    },
    enabled: !!amountIn && amountIn > 0,
    refetchInterval: 5000, // Aggiorna ogni 5s
  });

  const executeSwap = async (params: SwapParams) => {
    // 1. Verifica allowance
    // 2. Esegui swap tramite Aqua (pull + push)
    // 3. Trigger rebalance
  };

  return {
    simulation: simulateSwap.data,
    executeSwap,
  };
}
```

---

## 🏪 Mini-DEX Aggregato {#mini-dex}

### Architettura Aggregazione

```
┌─────────────────────────────────────┐
│      SwapInterface Component        │
│  (User selects token pair)           │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Vault Discovery                 │
│  - Query all Vaults                 │
│  - Filter by token pair support     │
│  - Rank by liquidity/price          │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Price Simulation                │
│  - Simulate swap su ogni Vault      │
│  - Compare prices                   │
│  - Select best route                │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Route Visualization            │
│  - Show selected Vault              │
│  - Show price impact                │
│  - Show slippage                    │
└─────────────────────────────────────┘
```

### Vault Discovery Hook

```typescript
// src/hooks/useVaultDiscovery.ts
export function useVaultDiscovery(tokenIn: string, tokenOut: string) {
  return useQuery({
    queryKey: ['vaults', tokenIn, tokenOut],
    queryFn: async () => {
      // 1. Fetch tutti i Vaults (da subgraph o contract events)
      const allVaults = await fetchVaults();
      
      // 2. Filtra Vaults che supportano la pair
      const supportedVaults = allVaults.filter(vault => 
        vault.supportsPair(tokenIn, tokenOut)
      );
      
      // 3. Simula swap su ogni Vault per trovare best price
      const vaultsWithPrice = await Promise.all(
        supportedVaults.map(async vault => {
          const simulation = await simulateSwapOnVault(vault, tokenIn, tokenOut);
          return {
            ...vault,
            price: simulation.priceOut,
            priceImpact: simulation.priceImpact,
          };
        })
      );
      
      // 4. Ordina per best price
      return vaultsWithPrice.sort((a, b) => 
        b.priceOut - a.priceOut
      );
    },
  });
}
```

### Route Visualization Component

```tsx
// src/components/swap/RouteVisualization.tsx
export function RouteVisualization({ route }: { route: SwapRoute }) {
  return (
    <div className="bg-background-card p-4 rounded-lg">
      <h3 className="text-sm font-semibold mb-2">Route</h3>
      <div className="flex items-center gap-2">
        <TokenIcon token={route.tokenIn} />
        <span className="text-text-secondary">→</span>
        <TokenIcon token={route.tokenOut} />
        <span className="text-text-muted text-xs ml-2">
          via {route.vault.name}
        </span>
      </div>
      <div className="mt-2 text-xs text-text-muted">
        Price impact: {route.priceImpact}% | 
        Slippage: {route.slippage}%
      </div>
    </div>
  );
}
```

---

## 📊 Visualizzazione Rebalancing {#rebalancing-ui}

### RebalancingStatus Component

```tsx
// src/components/rebalancing/RebalancingStatus.tsx
export function RebalancingStatus({ vault }: { vault: Vault }) {
  const { currentWeights, targetWeights, needsRebalance } = 
    useRebalancingStatus(vault.id);

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Rebalancing Status</h3>
      
      {/* Weight Comparison */}
      <div className="space-y-3">
        {vault.tokens.map(token => {
          const current = currentWeights[token];
          const target = targetWeights[token];
          const delta = target - current;
          
          return (
            <div key={token}>
              <div className="flex justify-between text-sm mb-1">
                <span>{token}</span>
                <span className={delta > 0 ? 'text-success' : 'text-warning'}>
                  {delta > 0 ? '+' : ''}{delta.toFixed(2)}%
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 bg-background-hover rounded h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded"
                    style={{ width: `${current}%` }}
                  />
                </div>
                <span className="text-xs text-text-muted w-12 text-right">
                  {current.toFixed(1)}%
                </span>
                <span className="text-xs text-text-muted w-12 text-right">
                  → {target.toFixed(1)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trigger Button */}
      {needsRebalance && (
        <button 
          className="mt-4 w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg"
          onClick={() => triggerRebalance(vault.id)}
        >
          Trigger Rebalance
        </button>
      )}
    </Card>
  );
}
```

### Rebalancing History Timeline

```tsx
// src/components/rebalancing/RebalancingHistory.tsx
export function RebalancingHistory({ vaultId }: { vaultId: string }) {
  const { data: history } = useQuery({
    queryKey: ['rebalancing-history', vaultId],
    queryFn: () => fetchRebalancingHistory(vaultId),
  });

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Rebalancing History</h3>
      <div className="space-y-3">
        {history?.map((event, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
            <div className="flex-1">
              <div className="text-sm font-medium">
                {event.type} - {formatDate(event.timestamp)}
              </div>
              <div className="text-xs text-text-muted">
                Gas: {formatGas(event.gasUsed)} | 
                Executor: {shortenAddress(event.executor)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
```

---

## 🗺️ Roadmap Implementazione {#roadmap}

### Fase 1: Foundation (Settimana 1-2)
- [ ] Setup progetto e dipendenze
- [ ] Design system base (Tailwind config)
- [ ] Componenti comuni (Card, Button, Input)
- [ ] Integrazione Aqua SDK base
- [ ] Wallet connection (RainbowKit)

### Fase 2: Vault Management (Settimana 3-4)
- [ ] VaultCard component
- [ ] VaultCreator wizard
- [ ] VaultDetailPage
- [ ] Deposit/Withdraw forms
- [ ] Shares display e calcoli

### Fase 3: Swap Interface (Settimana 5-6)
- [ ] SwapInterface component
- [ ] Token selector
- [ ] Price simulation (real-time)
- [ ] Vault discovery e aggregazione
- [ ] Route visualization

### Fase 4: Rebalancing UI (Settimana 7-8)
- [ ] RebalancingStatus component
- [ ] Weight comparison visualization
- [ ] Rebalancing trigger
- [ ] History timeline
- [ ] Multi-swap orchestration UI

### Fase 5: Polish & Optimization (Settimana 9-10)
- [ ] Loading states e error handling
- [ ] Responsive design
- [ ] Performance optimization
- [ ] Testing
- [ ] Documentation

---

## 📝 Note Implementative

### Data Fetching Strategy

- **React Query** per caching e refetching automatico
- **Subgraph** per indexing eventi on-chain (Vault creation, swaps, etc.)
- **Polling** per dati real-time (balances, prices)
- **Optimistic updates** per UX fluida

### Error Handling

- **Transaction errors**: Mostra messaggio user-friendly
- **Network errors**: Retry automatico con exponential backoff
- **Validation errors**: Inline feedback nei form
- **Slippage errors**: Warning prima dell'esecuzione

### Performance

- **Code splitting**: Lazy load pagine e componenti pesanti
- **Memoization**: useMemo per calcoli costosi
- **Virtual scrolling**: Per liste lunghe di Vaults
- **Image optimization**: Lazy load token icons

---

**Fine Documento Design Frontend**


