import { cn } from "@/lib/utils"
import { Outlet } from "@tanstack/react-router"

import React from "react"

export interface CenteredLayoutProps {
  children?: React.ReactNode
  className?: string
}
const CenteredLayoutComponent = ({ children = <Outlet />, className, }: CenteredLayoutProps) => {
  return <div className={cn("flex justify-center px-0 w-full", className)}>{children}</div>
}
export const CenteredLayout = React.memo(CenteredLayoutComponent) 