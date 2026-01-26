import { Badge } from "@/components/ui/badge"

export function DemoNotice({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/70">
        <Badge variant="outline" className="border-amber-300/40 text-amber-200">
          Demo
        </Badge>
        <span>
          This app is a commercial demonstration only. No real assets, deposits, or tickets are
          issued.
        </span>
      </div>
    </div>
  )
}
