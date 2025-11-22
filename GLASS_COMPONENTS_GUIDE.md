# Liquid Glass / Glassmorphism Components Guide

Questo progetto utilizza **shadcn/ui** con varianti glassmorphism personalizzate per creare un'interfaccia in stile "liquid glass" ispirata ad Apple.

## 🎨 Componenti Disponibili

Tutti i componenti shadcn/ui sono disponibili e configurati. I seguenti componenti hanno varianti glassmorphism:

### 1. **Card** - Varianti Glass

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Default (normale)
<Card>
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Glass standard
<Card variant="glass">
  <CardHeader>
    <CardTitle>Glass Card</CardTitle>
  </CardHeader>
  <CardContent>Content with glass effect</CardContent>
</Card>

// Glass forte
<Card variant="glass-strong">
  <CardHeader>
    <CardTitle>Strong Glass Card</CardTitle>
  </CardHeader>
  <CardContent>Content with strong glass effect</CardContent>
</Card>

// Glass Apple style (consigliato)
<Card variant="glass-apple">
  <CardHeader>
    <CardTitle>Apple Style Glass</CardTitle>
  </CardHeader>
  <CardContent>Content with Apple-inspired glass effect</CardContent>
</Card>
```

### 2. **Button** - Varianti Glass

```tsx
import { Button } from "@/components/ui/button"

// Glass standard
<Button variant="glass">Glass Button</Button>

// Glass Apple style
<Button variant="glass-apple">Apple Glass Button</Button>

// Altri variant disponibili: default, destructive, outline, secondary, ghost, link
```

### 3. **Input** - Variante Glass

```tsx
import { Input } from "@/components/ui/input"

// Default
<Input placeholder="Default input" />

// Glass
<Input variant="glass" placeholder="Glass input" />
```

## 🎨 Utility Classes CSS

Puoi anche usare direttamente le classi utility per effetti glassmorphism:

```tsx
// Glass standard
<div className="glass">Content</div>

// Glass forte
<div className="glass-strong">Content</div>

// Glass leggero
<div className="glass-light">Content</div>

// Glass Apple style
<div className="glass-apple">Content</div>

// Glass con hover effect
<div className="glass glass-hover">Content</div>
```

## 📦 Componenti Completi Disponibili

Tutti questi componenti shadcn/ui sono installati e pronti all'uso:

- ✅ **Button** (con varianti glass)
- ✅ **Card** (con varianti glass)
- ✅ **Input** (con variante glass)
- ✅ **Select**
- ✅ **Dialog** / **Modal**
- ✅ **Badge**
- ✅ **Avatar**
- ✅ **Tabs**
- ✅ **Form** + **Label**
- ✅ **Textarea**
- ✅ **Dropdown Menu**
- ✅ **Separator**
- ✅ **Collapsible**
- ✅ **Progress**
- ✅ **Skeleton**
- ✅ **Toast** / **Toaster**

## 🎯 Esempi per il Progetto Wave

### VaultCard con Glass Effect

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function VaultCard({ vault }) {
  return (
    <Card variant="glass-apple" className="glass-hover">
      <CardHeader>
        <CardTitle>{vault.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">TVL</p>
            <p className="text-2xl font-bold">{vault.tvl}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">APY</p>
            <p className="text-2xl font-bold text-success">{vault.apy}%</p>
          </div>
        </div>
        <div className="flex gap-2">
          {vault.tokens.map(token => (
            <Badge key={token} variant="secondary">{token}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="glass" className="flex-1">View</Button>
        <Button variant="glass-apple" className="flex-1">Deposit</Button>
      </CardFooter>
    </Card>
  )
}
```

### Swap Interface con Glass

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SwapInterface() {
  return (
    <Card variant="glass-apple" className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Swap Tokens</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input variant="glass" placeholder="0.0" />
          <Select>
            <SelectTrigger className="glass">
              <SelectValue placeholder="Select token" />
            </SelectTrigger>
            <SelectContent className="glass-apple">
              <SelectItem value="eth">ETH</SelectItem>
              <SelectItem value="usdc">USDC</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="glass-apple" className="w-full">Execute Swap</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎨 Personalizzazione

Gli effetti glassmorphism sono definiti in `src/index.css` nella sezione `@layer utilities`. Puoi personalizzare:

- Opacità del background
- Intensità del blur
- Colore e opacità dei bordi
- Shadow effects
- Gradient backgrounds

## 📚 Documentazione Completa

Per la documentazione completa di tutti i componenti shadcn/ui, visita:
https://ui.shadcn.com/docs/components

## 🚀 Prossimi Passi

1. Usa i componenti glass nelle pagine del progetto
2. Personalizza gli effetti glassmorphism in `src/index.css` se necessario
3. Combina componenti glass con animazioni (considera Framer Motion se necessario)


