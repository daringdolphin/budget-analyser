"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const SidebarContext = React.createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isOpen: true,
  setIsOpen: () => {},
})

interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultIsOpen?: boolean
}

const SidebarProvider = ({ children, defaultIsOpen = true, className, ...props }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

const useSidebar = () => {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "floating"
}

const Sidebar = ({ className, variant = "default", ...props }: SidebarProps) => {
  const { isOpen } = useSidebar()

  return (
    <aside
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "h-full transition-[width] duration-300",
        variant === "default" && "w-[270px] data-[state=closed]:w-[70px]",
        variant === "floating" && "absolute left-0 top-0 z-50 w-[270px] data-[state=closed]:w-0",
        className
      )}
      {...props}
    />
  )
}

const SidebarTrigger = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isOpen, setIsOpen } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-6 w-6", className)}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      <ChevronRight
        className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        aria-hidden="true"
      />
    </Button>
  )
}

const SidebarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("px-2 py-2", className)} {...props} />
}

const SidebarContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex-1 overflow-auto", className)} {...props} />
}

const SidebarFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("px-2 py-2", className)} {...props} />
}

const SidebarInset = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("-mx-2", className)} {...props} />
}

const SidebarGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("px-2 py-2", className)} {...props} />
}

const SidebarMenu = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("px-2 py-1", className)} {...props} />
}

const SidebarMenuItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("px-2", className)} {...props} />
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, isActive, size = "default", asChild = false, ...props }, ref) => {
    const { isOpen } = useSidebar()

    return (
      <Button
        ref={ref}
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2",
          size === "default" && "h-10",
          size === "sm" && "h-8",
          size === "lg" && "h-12",
          !isOpen && "justify-center",
          isActive && "bg-accent",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuSub = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("ml-4", className)} {...props} />
}

const SidebarMenuSubItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("px-2", className)} {...props} />
}

interface SidebarMenuSubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  asChild?: boolean
}

const SidebarMenuSubButton = React.forwardRef<HTMLButtonElement, SidebarMenuSubButtonProps>(
  ({ className, isActive, asChild = false, ...props }, ref) => {
    const { isOpen } = useSidebar()

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        className={cn(
          "w-full justify-start gap-2",
          !isOpen && "justify-center",
          isActive && "bg-accent",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} 