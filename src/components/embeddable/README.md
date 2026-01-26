# Vault Widget - Embeddable UI Component

Un componente UI personalizzabile e embeddable per visualizzare e interagire con vault.

## Caratteristiche

- ✅ Card con dati vault (TVL, performance, fees)
- ✅ Card deposit e withdraw
- ✅ Personalizzazione completa di colori e temi
- ✅ Labels personalizzabili
- ✅ Pronto per essere embeddato in altri frontend

## Installazione

```tsx
import { VaultWidgetEmbed } from "@/components/embeddable"
```

```bash
npm i @factordao/embeddable @factordao/sdk @factordao/sdk-studio @factordao/tokenlist
npm i @rainbow-me/rainbowkit wagmi viem @tanstack/react-query
```

## Utilizzo Base (con provider interni)

```tsx
import { VaultWidgetEmbed } from "@/components/embeddable"

function MyApp() {
  return (
    <VaultWidgetEmbed
      walletMode="internal"
      projectId="YOUR_PROJECT_ID"
      rpcUrl="https://mainnet.base.org"
      config={{
        vaultAddress: "0x...",
      }}
    />
  )
}
```

## Utilizzo con provider esterni

```tsx
import { VaultWidgetEmbed } from "@/components/embeddable"

function MyApp() {
  return (
    <VaultWidgetEmbed
      walletMode="external"
      config={{
        vaultAddress: "0x...",
      }}
    />
  )
}
```

## Personalizzazione Colori

```tsx
import { VaultWidgetEmbed, defaultTheme } from "@/components/embeddable"

const customTheme = {
  ...defaultTheme,
  primary: "#FF6B6B",
  secondary: "#4ECDC4",
  background: "#1a1a1a",
  cardBackground: "rgba(30, 30, 30, 0.8)",
  border: "rgba(255, 255, 255, 0.2)",
  success: "#51CF66",
  error: "#FF6B6B",
}

function MyApp() {
  return (
    <VaultWidgetEmbed
      walletMode="internal"
      projectId="YOUR_PROJECT_ID"
      rpcUrl="https://mainnet.base.org"
      config={{
        vaultAddress: "0x...",
        theme: customTheme,
      }}
    />
  )
}
```

## Personalizzazione Labels

```tsx
<VaultWidgetEmbed
  walletMode="internal"
  projectId="YOUR_PROJECT_ID"
  rpcUrl="https://mainnet.base.org"
  config={{
    vaultAddress: "0x...",
    customLabels: {
      vaultName: "My Custom Vault Name",
      depositLabel: "Deposita",
      withdrawLabel: "Preleva",
    },
  }}
/>
```

## Mostrare solo Deposit o Withdraw

```tsx
// Solo deposit
<VaultWidgetEmbed
  walletMode="internal"
  projectId="YOUR_PROJECT_ID"
  rpcUrl="https://mainnet.base.org"
  config={{
    vaultAddress: "0x...",
    showWithdraw: false,
  }}
/>

// Solo withdraw
<VaultWidgetEmbed
  walletMode="internal"
  projectId="YOUR_PROJECT_ID"
  rpcUrl="https://mainnet.base.org"
  config={{
    vaultAddress: "0x...",
    showDeposit: false,
  }}
/>
```

## Esempio Completo

```tsx
import { VaultWidgetEmbed, defaultTheme } from "@/components/embeddable"

function MyVaultPage() {
  const customTheme = {
    ...defaultTheme,
    primary: "#00D9FF",
    background: "#0a0a0a",
    cardBackground: "rgba(0, 0, 0, 0.4)",
    borderRadius: "1rem",
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <VaultWidgetEmbed
        walletMode="internal"
        projectId="YOUR_PROJECT_ID"
        rpcUrl="https://mainnet.base.org"
        config={{
          vaultAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          theme: customTheme,
          showDeposit: true,
          showWithdraw: true,
          customLabels: {
            vaultName: "USD StableSummit Vault",
            depositLabel: "Deposit",
            withdrawLabel: "Withdraw",
          },
        }}
      />
    </div>
  )
}
```

## Props

### VaultWidgetConfig

| Prop | Tipo | Default | Descrizione |
|------|------|---------|-------------|
| `vaultAddress` | `string` | **required** | Indirizzo della vault |
### VaultWidgetEmbedProps

| Prop | Tipo | Default | Descrizione |
|------|------|---------|-------------|
| `walletMode` | `"external" \| "internal"` | `"external"` | Usa provider esterni o interni |
| `projectId` | `string` | `undefined` | WalletConnect Project ID (required per `internal`) |
| `rpcUrl` | `string` | `"https://mainnet.base.org"` | RPC Base |
| `wagmiConfig` | `object` | `undefined` | Config Wagmi custom |
| `queryClient` | `QueryClient` | `undefined` | React Query client custom |

| `theme` | `Partial<VaultWidgetTheme>` | `defaultTheme` | Tema personalizzato |
| `showDeposit` | `boolean` | `true` | Mostra card deposit |
| `showWithdraw` | `boolean` | `true` | Mostra card withdraw |
| `customLabels` | `object` | `undefined` | Labels personalizzabili |

### VaultWidgetTheme

Tutti i colori, font e spaziature possono essere personalizzati:

```tsx
interface VaultWidgetTheme {
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
  fontFamily: string
  fontSize: { xs, sm, base, lg, xl }
  borderRadius: string
  padding: string
  gap: string
}
```

## Note

- Per `walletMode="external"` l'host deve fornire Wagmi/React Query/RainbowKit
- Per `walletMode="internal"` il widget crea i provider interni (serve `projectId`)
- Per usarlo su FE esterni serve una build pubblicata (npm) o un bundle CDN
