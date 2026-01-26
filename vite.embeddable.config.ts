import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      buffer: "buffer",
    },
  },
  optimizeDeps: {
    include: ["buffer"],
  },
  build: {
    outDir: "public/embeddable",
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/embeddable-entry.tsx"),
      name: "VaultWidget",
      formats: ["es", "umd"],
      fileName: (format) => `vault-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
