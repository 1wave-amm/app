import { useState, useMemo } from "react"
import { VaultWidget, defaultTheme, VaultWidgetConfig } from "@/components/embeddable"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Container } from "@/components/atomic/Container"

export function VaultWidgetDemo() {
  const [vaultAddress, setVaultAddress] = useState("0x6878d79f988e7ecb537016b93bb77b4d680e1f01")
  const [vaultName, setVaultName] = useState("USD StableSummit Vault")
  const [depositLabel, setDepositLabel] = useState("Deposit")
  const [withdrawLabel, setWithdrawLabel] = useState("Withdraw")
  const [showDeposit, setShowDeposit] = useState(true)
  const [showWithdraw, setShowWithdraw] = useState(true)
  const [hideAddress, setHideAddress] = useState(false)
  const [showTokenChips, setShowTokenChips] = useState(false)
  const [showAquaPairs, setShowAquaPairs] = useState(false)
  const [hideFees, setHideFees] = useState(false)
  const [hidePerformance, setHidePerformance] = useState(false)
  const [showTVL, setShowTVL] = useState(true)
  const [framework, setFramework] = useState<"react" | "vue" | "angular" | "svelte" | "vanilla">("react")
  
  // Theme colors
  const [primary, setPrimary] = useState(defaultTheme.primary)
  const [secondary, setSecondary] = useState(defaultTheme.secondary)
  const [background, setBackground] = useState(defaultTheme.background)
  const [cardBackground, setCardBackground] = useState(defaultTheme.cardBackground)
  const [border, setBorder] = useState(defaultTheme.border)
  const [text, setText] = useState(defaultTheme.text)
  const [textSecondary, setTextSecondary] = useState(defaultTheme.textSecondary)
  const [success, setSuccess] = useState(defaultTheme.success)
  const [error, setError] = useState(defaultTheme.error)
  const [inputColor, setInputColor] = useState("#ffffff")
  const [borderRadius, setBorderRadius] = useState(defaultTheme.borderRadius)
  const [padding, setPadding] = useState(defaultTheme.padding)
  const [gap, setGap] = useState(defaultTheme.gap)
  const [fontFamily, setFontFamily] = useState(defaultTheme.fontFamily)
  const [fontSizeXs, setFontSizeXs] = useState(defaultTheme.fontSize.xs)
  const [fontSizeSm, setFontSizeSm] = useState(defaultTheme.fontSize.sm)
  const [fontSizeBase, setFontSizeBase] = useState(defaultTheme.fontSize.base)
  const [fontSizeLg, setFontSizeLg] = useState(defaultTheme.fontSize.lg)
  const [fontSizeXl, setFontSizeXl] = useState(defaultTheme.fontSize.xl)

  const normalizeColorInput = (value: string) => {
    if (value.startsWith("#")) {
      if (value.length === 4 || value.length === 7) return value
    }
    const match = value.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i)
    if (match) {
      const r = Math.min(255, Math.max(0, Number(match[1] || 0)))
      const g = Math.min(255, Math.max(0, Number(match[2] || 0)))
      const b = Math.min(255, Math.max(0, Number(match[3] || 0)))
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
        .toString(16)
        .padStart(2, "0")}`
    }
    return "#000000"
  }
  
  // Reset function
  const handleReset = () => {
    setVaultAddress("0x6878d79f988e7ecb537016b93bb77b4d680e1f01")
    setVaultName("USD StableSummit Vault")
    setDepositLabel("Deposit")
    setWithdrawLabel("Withdraw")
    setShowDeposit(true)
    setShowWithdraw(true)
    setHideAddress(false)
    setShowTokenChips(false)
    setShowAquaPairs(false)
    setHideFees(false)
    setHidePerformance(false)
    setShowTVL(true)
    setPrimary(defaultTheme.primary)
    setSecondary(defaultTheme.secondary)
    setBackground(defaultTheme.background)
    setCardBackground(defaultTheme.cardBackground)
    setBorder(defaultTheme.border)
    setText(defaultTheme.text)
    setTextSecondary(defaultTheme.textSecondary)
    setSuccess(defaultTheme.success)
    setError(defaultTheme.error)
    setInputColor("#ffffff")
    setBorderRadius(defaultTheme.borderRadius)
    setPadding(defaultTheme.padding)
    setGap(defaultTheme.gap)
    setFontFamily(defaultTheme.fontFamily)
    setFontSizeXs(defaultTheme.fontSize.xs)
    setFontSizeSm(defaultTheme.fontSize.sm)
    setFontSizeBase(defaultTheme.fontSize.base)
    setFontSizeLg(defaultTheme.fontSize.lg)
    setFontSizeXl(defaultTheme.fontSize.xl)
  }

  const customTheme = useMemo(
    () => ({
      ...defaultTheme,
      primary,
      secondary,
      background,
      cardBackground,
      border,
      text,
      textSecondary,
      success,
      error,
      inputColor,
      borderRadius,
      padding,
      gap,
      fontFamily,
      fontSize: {
        xs: fontSizeXs,
        sm: fontSizeSm,
        base: fontSizeBase,
        lg: fontSizeLg,
        xl: fontSizeXl,
      },
    }),
    [
      primary,
      secondary,
      background,
      cardBackground,
      border,
      text,
      textSecondary,
      success,
      error,
      inputColor,
      borderRadius,
      padding,
      gap,
      fontFamily,
      fontSizeXs,
      fontSizeSm,
      fontSizeBase,
      fontSizeLg,
      fontSizeXl,
    ]
  )

  const config: VaultWidgetConfig = useMemo(
    () => ({
      vaultAddress,
      theme: customTheme,
      showDeposit,
      showWithdraw,
      hideAddress,
      showTokenChips,
      showAquaPairs,
      hideFees,
      hidePerformance,
      showTVL,
      customLabels: {
        vaultName,
        depositLabel,
        withdrawLabel,
      },
    }),
    [
      vaultAddress,
      customTheme,
      showDeposit,
      showWithdraw,
      hideAddress,
      showTokenChips,
      showAquaPairs,
      hideFees,
      hidePerformance,
      showTVL,
      vaultName,
      depositLabel,
      withdrawLabel,
    ]
  )

  const generatedCode = useMemo(() => {
    const themeDiffParts: string[] = []
    Object.entries(customTheme).forEach(([key, value]) => {
      if (key === "fontSize") return
      if (key === "fontFamily") {
        if (defaultTheme.fontFamily !== value) {
          themeDiffParts.push(`    fontFamily: "${value}",`)
        }
        return
      }
      if (defaultTheme[key as keyof typeof defaultTheme] !== value) {
        themeDiffParts.push(`    ${key}: "${value}",`)
      }
    })

    const fontSizeDiff = Object.entries(customTheme.fontSize)
      .filter(([sizeKey, sizeValue]) => defaultTheme.fontSize[sizeKey as keyof typeof defaultTheme.fontSize] !== sizeValue)
      .map(([sizeKey, sizeValue]) => `      ${sizeKey}: "${sizeValue}",`)
      .join("\n")

    if (fontSizeDiff.length > 0) {
      themeDiffParts.push(`    fontSize: {\n${fontSizeDiff}\n    },`)
    }

    const themeDiff = themeDiffParts.join("\n")
    
    const hasThemeChanges = themeDiff.length > 0

    const labelsConfig = [
      vaultName !== "USD StableSummit Vault" && `      vaultName: "${vaultName}",`,
      depositLabel !== "Deposit" && `      depositLabel: "${depositLabel}",`,
      withdrawLabel !== "Withdraw" && `      withdrawLabel: "${withdrawLabel}",`,
    ]
      .filter(Boolean)
      .join("\n")

    const showConfig = [
      !showDeposit && "    showDeposit: false,",
      !showWithdraw && "    showWithdraw: false,",
      hideAddress && "    hideAddress: true,",
      showTokenChips && "    showTokenChips: true,",
      showAquaPairs && "    showAquaPairs: true,",
      hideFees && "    hideFees: true,",
      hidePerformance && "    hidePerformance: true,",
      !showTVL && "    showTVL: false,",
    ]
      .filter(Boolean)
      .join("\n")

    const configString = [
      `    vaultAddress: "${vaultAddress}",`,
      hasThemeChanges && `    theme: {\n      ...defaultTheme,\n${themeDiff}\n    },`,
      showConfig,
      labelsConfig && `    customLabels: {\n${labelsConfig}\n    },`,
    ]
      .filter(Boolean)
      .join("\n")

    switch (framework) {
      case "react":
        return `// npm i @factordao/embeddable @factordao/sdk @factordao/sdk-studio @factordao/tokenlist
// npm i @rainbow-me/rainbowkit wagmi viem @tanstack/react-query
import React from "react"
import "@rainbow-me/rainbowkit/styles.css"
import "@factordao/sdk"
import "@factordao/sdk-studio"
import "@factordao/tokenlist"
import { VaultWidgetEmbed${hasThemeChanges ? ", defaultTheme" : ""} } from "@factordao/embeddable"

export default function App() {
  return (
    <VaultWidgetEmbed
      walletMode="internal" // "external" if host already provides Wagmi/ReactQuery/RainbowKit
      projectId="YOUR_PROJECT_ID"
      rpcUrl="https://mainnet.base.org"
      config={{
${configString}
      }}
    />
  )
}`
      case "vue":
        return `<template>
  <VaultWidget :config="config" />
</template>

<script setup>
import { VaultWidget${hasThemeChanges ? ", defaultTheme" : ""} } from "@factordao/embeddable"

const config = {
${configString}
}
</script>`
      case "angular":
        return `import { Component } from '@angular/core'
import { VaultWidget${hasThemeChanges ? ", defaultTheme" : ""} } from '@factordao/embeddable'

@Component({
  selector: 'app-vault',
  template: '<vault-widget [config]="config"></vault-widget>'
})
export class VaultComponent {
  config = {
${configString}
  }
}`
      case "svelte":
        return `<script>
  import { VaultWidget${hasThemeChanges ? ", defaultTheme" : ""} } from '@factordao/embeddable'
  
  const config = {
${configString}
  }
</script>

<VaultWidget {config} />`
      case "vanilla":
        return `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="./vault-widget.js"></script>
</head>
<body>
  <div id="vault-widget-root"></div>
  <script>
    const config = {
${configString}
    }
    ReactDOM.render(
      React.createElement(VaultWidget, { config }),
      document.getElementById('vault-widget-root')
    )
  </script>
</body>
</html>`
      default:
        return ""
    }
  }, [vaultAddress, vaultName, depositLabel, withdrawLabel, showDeposit, showWithdraw, framework, customTheme])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.2),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.2),transparent_70%)] blur-3xl" />
      </div>
      
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <Container maxWidth="full" className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black text-xs font-semibold">
              S
            </span>
            <span className="text-sm font-semibold tracking-[0.08em] uppercase text-white">
              Stable Summit
            </span>
          </div>
          <div className="h-6 w-6 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.45)]" />
        </Container>
      </header>

      <main className="relative z-10 pt-24 pb-20">
        <Container maxWidth="full" className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Vault Widget</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
                Embed Your Vault
              </h1>
              <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                Customize and embed your vault widget in any frontend. Personalize colors, labels, and features to match your brand.
              </p>
            </div>

            {/* Widget Preview - Above */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Preview</h2>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] max-w-4xl mx-auto">
                <VaultWidget config={config} />
              </div>
            </div>

            {/* Customization and Generated Code - Below, side by side */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {/* Customization Panel */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Customization</h2>
                  <button
                    onClick={handleReset}
                    className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 hover:text-white transition"
                  >
                    Reset
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Vault Settings */}
                  <div>
                    <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Vault Settings</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="vaultAddress" className="text-xs text-white/80 mb-1 block">
                          Vault Address
                        </Label>
                        <Input
                          id="vaultAddress"
                          value={vaultAddress}
                          onChange={(e) => setVaultAddress(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="vaultName" className="text-xs text-white/80 mb-1 block">
                          Vault Name
                        </Label>
                        <Input
                          id="vaultName"
                          value={vaultName}
                          onChange={(e) => setVaultName(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div>
                    <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Labels</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="depositLabel" className="text-xs text-white/80 mb-1 block">
                          Deposit Label
                        </Label>
                        <Input
                          id="depositLabel"
                          value={depositLabel}
                          onChange={(e) => setDepositLabel(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="withdrawLabel" className="text-xs text-white/80 mb-1 block">
                          Withdraw Label
                        </Label>
                        <Input
                          id="withdrawLabel"
                          value={withdrawLabel}
                          onChange={(e) => setWithdrawLabel(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="showDeposit"
                          checked={showDeposit}
                          onCheckedChange={(checked) => setShowDeposit(checked === true)}
                        />
                        <Label htmlFor="showDeposit" className="text-xs text-white/80 cursor-pointer">
                          Show Deposit
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="showWithdraw"
                          checked={showWithdraw}
                          onCheckedChange={(checked) => setShowWithdraw(checked === true)}
                        />
                        <Label htmlFor="showWithdraw" className="text-xs text-white/80 cursor-pointer">
                          Show Withdraw
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="hideAddress"
                          checked={hideAddress}
                          onCheckedChange={(checked) => setHideAddress(checked === true)}
                        />
                        <Label htmlFor="hideAddress" className="text-xs text-white/80 cursor-pointer">
                          Hide Address
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="showTokenChips"
                          checked={showTokenChips}
                          onCheckedChange={(checked) => setShowTokenChips(checked === true)}
                        />
                        <Label htmlFor="showTokenChips" className="text-xs text-white/80 cursor-pointer">
                          Show Token Chips
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="showAquaPairs"
                          checked={showAquaPairs}
                          onCheckedChange={(checked) => setShowAquaPairs(checked === true)}
                        />
                        <Label htmlFor="showAquaPairs" className="text-xs text-white/80 cursor-pointer">
                          Show Aqua Pairs
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="hideFees"
                          checked={hideFees}
                          onCheckedChange={(checked) => setHideFees(checked === true)}
                        />
                        <Label htmlFor="hideFees" className="text-xs text-white/80 cursor-pointer">
                          Hide Fees
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="hidePerformance"
                          checked={hidePerformance}
                          onCheckedChange={(checked) => setHidePerformance(checked === true)}
                        />
                        <Label htmlFor="hidePerformance" className="text-xs text-white/80 cursor-pointer">
                          Hide Performance
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="showTVL"
                          checked={showTVL}
                          onCheckedChange={(checked) => setShowTVL(checked === true)}
                        />
                        <Label htmlFor="showTVL" className="text-xs text-white/80 cursor-pointer">
                          Show TVL
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div>
                    <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Typography</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2">
                        <Label htmlFor="fontFamily" className="text-xs text-white/80 mb-1 block">
                          Font Family
                        </Label>
                        <Input
                          id="fontFamily"
                          value={fontFamily}
                          onChange={(e) => setFontFamily(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fontSizeXs" className="text-xs text-white/80 mb-1 block">
                          Font XS
                        </Label>
                        <Input
                          id="fontSizeXs"
                          value={fontSizeXs}
                          onChange={(e) => setFontSizeXs(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fontSizeSm" className="text-xs text-white/80 mb-1 block">
                          Font SM
                        </Label>
                        <Input
                          id="fontSizeSm"
                          value={fontSizeSm}
                          onChange={(e) => setFontSizeSm(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fontSizeBase" className="text-xs text-white/80 mb-1 block">
                          Font Base
                        </Label>
                        <Input
                          id="fontSizeBase"
                          value={fontSizeBase}
                          onChange={(e) => setFontSizeBase(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fontSizeLg" className="text-xs text-white/80 mb-1 block">
                          Font LG
                        </Label>
                        <Input
                          id="fontSizeLg"
                          value={fontSizeLg}
                          onChange={(e) => setFontSizeLg(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fontSizeXl" className="text-xs text-white/80 mb-1 block">
                          Font XL
                        </Label>
                        <Input
                          id="fontSizeXl"
                          value={fontSizeXl}
                          onChange={(e) => setFontSizeXl(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Colors</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "Primary", value: primary, setter: setPrimary },
                        { label: "Secondary", value: secondary, setter: setSecondary },
                        { label: "Background", value: background, setter: setBackground },
                        { label: "Card BG", value: cardBackground, setter: setCardBackground },
                        { label: "Border", value: border, setter: setBorder },
                        { label: "Text", value: text, setter: setText },
                        { label: "Text Secondary", value: textSecondary, setter: setTextSecondary },
                        { label: "Success", value: success, setter: setSuccess },
                        { label: "Error", value: error, setter: setError },
                        { label: "Input", value: inputColor, setter: setInputColor },
                      ].map(({ label, value, setter }) => (
                        <div key={label}>
                          <Label className="text-xs text-white/80 mb-1 block">{label}</Label>
                          <div className="flex gap-1.5 items-center">
                            <input
                              type="color"
                              value={normalizeColorInput(value)}
                              onChange={(e) => setter(e.target.value)}
                              className="w-8 h-7 border border-white/10 rounded cursor-pointer flex-shrink-0"
                            />
                            <Input
                              value={value}
                              onChange={(e) => setter(e.target.value)}
                              className="flex-1 bg-black/50 border-white/10 text-white text-xs h-7 py-0"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Spacing */}
                  <div>
                    <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Spacing</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="padding" className="text-xs text-white/80 mb-1 block">
                          Padding
                        </Label>
                        <Input
                          id="padding"
                          value={padding}
                          onChange={(e) => setPadding(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gap" className="text-xs text-white/80 mb-1 block">
                          Gap
                        </Label>
                        <Input
                          id="gap"
                          value={gap}
                          onChange={(e) => setGap(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="borderRadius" className="text-xs text-white/80 mb-1 block">
                          Border Radius
                        </Label>
                        <Input
                          id="borderRadius"
                          value={borderRadius}
                          onChange={(e) => setBorderRadius(e.target.value)}
                          className="bg-black/50 border-white/10 text-white text-xs h-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Generation */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 flex flex-col">
                <Tabs value={framework} onValueChange={(value: any) => setFramework(value)} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    <h2 className="text-sm font-semibold text-white">Generated Code</h2>
                    <TabsList className="bg-black/50 border-white/10 h-8">
                      <TabsTrigger value="react" className="text-xs px-2 py-1 h-7">React</TabsTrigger>
                      <TabsTrigger value="vue" className="text-xs px-2 py-1 h-7">Vue.js</TabsTrigger>
                      <TabsTrigger value="angular" className="text-xs px-2 py-1 h-7">Angular</TabsTrigger>
                      <TabsTrigger value="svelte" className="text-xs px-2 py-1 h-7">Svelte</TabsTrigger>
                      <TabsTrigger value="vanilla" className="text-xs px-2 py-1 h-7">Vanilla JS</TabsTrigger>
                    </TabsList>
                  </div>

                  {(["react", "vue", "angular", "svelte", "vanilla"] as const).map((fw) => (
                    <TabsContent key={fw} value={fw} className="flex flex-col gap-3 mt-0">
                      <pre className="bg-black/70 p-3 rounded-lg overflow-auto text-[10px] text-white border border-white/10 m-0 h-[400px]">
                        <code>{generatedCode}</code>
                      </pre>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(generatedCode)
                          alert("Code copied to clipboard!")
                        }}
                        className="px-3 py-1.5 bg-[#00D9FF] text-black rounded-lg cursor-pointer text-xs font-semibold hover:opacity-90 transition"
                      >
                        Copy Code
                      </button>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>

            {/* Embed Instructions */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <h2 className="text-lg font-semibold text-white mb-4">Embed Instructions</h2>

              <div className="space-y-4 text-sm text-white/80">
                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-white/70">
                    <div>✅ Vault data card (TVL, performance, fees)</div>
                    <div>✅ Deposit and withdraw card</div>
                    <div>✅ Full theme and color customization</div>
                    <div>✅ Custom labels</div>
                    <div>✅ Ready to embed in external frontends</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Installation</h3>
                  <pre className="bg-black/70 p-3 rounded-lg overflow-auto text-[11px] text-white border border-white/10">
{`npm i @factordao/embeddable @factordao/sdk @factordao/sdk-studio @factordao/tokenlist
npm i @rainbow-me/rainbowkit wagmi viem @tanstack/react-query`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Basic Usage (internal providers)</h3>
                  <pre className="bg-black/70 p-3 rounded-lg overflow-auto text-[11px] text-white border border-white/10">
{`import { VaultWidgetEmbed } from "@factordao/embeddable"

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
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Usage with external providers</h3>
                  <pre className="bg-black/70 p-3 rounded-lg overflow-auto text-[11px] text-white border border-white/10">
{`import { VaultWidgetEmbed } from "@factordao/embeddable"

function MyApp() {
  return (
    <VaultWidgetEmbed
      walletMode="external"
      config={{
        vaultAddress: "0x...",
      }}
    />
  )
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Color Customization</h3>
                  <pre className="bg-black/70 p-3 rounded-lg overflow-auto text-[11px] text-white border border-white/10">
{`import { VaultWidgetEmbed, defaultTheme } from "@factordao/embeddable"

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
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Label Customization</h3>
                  <pre className="bg-black/70 p-3 rounded-lg overflow-auto text-[11px] text-white border border-white/10">
{`<VaultWidgetEmbed
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
/>`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Show only Deposit or Withdraw</h3>
                  <pre className="bg-black/70 p-3 rounded-lg overflow-auto text-[11px] text-white border border-white/10">
{`// Solo deposit
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
/>`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Full Example</h3>
                  <pre className="bg-black/70 p-3 rounded-lg overflow-auto text-[11px] text-white border border-white/10">
{`import { VaultWidgetEmbed, defaultTheme } from "@factordao/embeddable"

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
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#00D9FF] mb-2">Notes</h3>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>- For walletMode="external" the host must provide Wagmi/React Query/RainbowKit</div>
                    <div>- For walletMode="internal" the widget creates its own providers (requires projectId)</div>
                    <div>- For external FEs you need a published npm package or a CDN bundle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}
