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
      <div className={cn("grid grid-cols-1 md:grid-cols-[auto_1fr]", className)} {...props}>
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
    <div
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "relative hidden h-screen flex-col gap-4 overflow-hidden border-r bg-sidebar text-sidebar-foreground md:flex",
        isOpen ? "w-[var(--sidebar-width)]" : "w-[var(--sidebar-collapsed-width)]",
        variant === "floating" && "border-none shadow-none",
        className,
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
      className={cn("h-9 w-9", className)}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "rotate-0")} />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

const SidebarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex h-14 items-center border-b px-4", className)} {...props} />
}

const SidebarContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex-1 overflow-auto", className)} {...props} />
}

const SidebarFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex items-center border-t p-4", className)} {...props} />
}

const SidebarInset = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex h-screen flex-col overflow-hidden", className)} {...props} />
}

const SidebarGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("px-2 py-2", className)} {...props} />
}

const SidebarMenu = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />
}

const SidebarMenuItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("", className)} {...props} />
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, isActive, size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          size === "sm" && "py-1",
          size === "lg" && "py-3",
          isActive && "bg-accent/50",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuSub = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("ml-4 flex flex-col gap-1 border-l pl-4", className)} {...props} />
}

const SidebarMenuSubItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("", className)} {...props} />
}

interface SidebarMenuSubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  asChild?: boolean
}

const SidebarMenuSubButton = React.forwardRef<HTMLButtonElement, SidebarMenuSubButtonProps>(
  ({ className, isActive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          isActive && "bg-accent/50",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarTrigger,
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
  useSidebar,
}

