import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number
  total?: number
  className?: string
}

export function Progress({
  className,
  value = 0,
  total = 20,
  ...props
}: ProgressProps) {
  const count = Math.round((value / total) * 100)

  return (
    <div className="relative w-full">
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          "relative h-8 w-full rounded-xl border border-gray-300 bg-white p-1 overflow-hidden",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="h-full rounded-lg bg-gray-300 transition-all"
          style={{ width: `${count}%` }}
        />
      </ProgressPrimitive.Root>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-700">
        {count}%
      </span>
      <span className="absolute top-1/2 right-3 -translate-y-1/2 text-sm text-gray-700">
        {value} of {total}
      </span>
    </div>
  )
}
