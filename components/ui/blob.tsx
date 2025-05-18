import { cn } from "@/lib/utils"
import { memo } from "react"

interface BlobProps {
  className?: string
  color?: string
  opacity?: number
  size?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  rotate?: string
  blur?: string
  zIndex?: number
}

// Memoize blob components to prevent unnecessary re-renders
export const Blob = memo(function Blob({
  className,
  color = "#d2b48c",
  opacity = 0.1,
  size = "40%",
  top,
  left,
  right,
  bottom,
  rotate = "0deg",
  blur = "0px",
  zIndex = -1,
}: BlobProps) {
  return (
    <div
      className={cn("absolute pointer-events-none", className)}
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        opacity,
        transform: `rotate(${rotate})`,
        filter: `blur(${blur})`,
        zIndex,
        borderRadius: "60% 40% 50% 40% / 40% 50% 60% 50%",
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  )
})

export const CircleBlob = memo(function CircleBlob({
  className,
  color = "#d2b48c",
  opacity = 0.1,
  size = "40%",
  top,
  left,
  right,
  bottom,
  blur = "0px",
  zIndex = -1,
}: Omit<BlobProps, "rotate">) {
  return (
    <div
      className={cn("absolute pointer-events-none", className)}
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        opacity,
        filter: `blur(${blur})`,
        zIndex,
        borderRadius: "50%",
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  )
})
