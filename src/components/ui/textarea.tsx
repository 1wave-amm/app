import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & { variant?: "default" | "glass" }
>(({ className, variant = "default", ...props }, ref) => {
  const glassClasses = variant === "glass" 
    ? "glass border-white/20 focus-visible:border-white/40 focus-visible:glass-strong" 
    : "bg-transparent border-input"
  
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        glassClasses,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
