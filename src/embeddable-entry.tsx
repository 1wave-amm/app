import ReactDOM from "react-dom/client"
import { Buffer } from "buffer"
import "@rainbow-me/rainbowkit/styles.css"
import "./index.css"
import { VaultWidgetEmbed } from "./components/embeddable"

if (typeof window !== "undefined") {
  globalThis.Buffer = Buffer
}

export type { VaultWidgetConfig } from "./components/embeddable"
export { VaultWidgetEmbed } from "./components/embeddable"

export interface CreateVaultWidgetOptions {
  target: string | HTMLElement
  config: Parameters<typeof VaultWidgetEmbed>[0]["config"]
  walletMode?: "external" | "internal"
  projectId?: string
  rpcUrl?: string
}

export function createVaultWidget(options: CreateVaultWidgetOptions) {
  const element =
    typeof options.target === "string"
      ? document.querySelector(options.target)
      : options.target

  if (!element) {
    throw new Error("VaultWidget target element not found.")
  }

  const root = ReactDOM.createRoot(element)
  root.render(
    <VaultWidgetEmbed
      walletMode={options.walletMode || "internal"}
      projectId={options.projectId}
      rpcUrl={options.rpcUrl}
      config={options.config}
    />
  )

  return () => root.unmount()
}
