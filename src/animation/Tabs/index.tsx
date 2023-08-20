"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "../../utils/mergeCss"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    role="tablist"
    className={cn(
      "flex-nowrap whitespace-nowrap transition relative no-scrollbar overscroll-x-auto rounded-none border-none bg-transparent m-0 p-0 overflow-x-scroll",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    role="tab"
    className={cn(
      className="relative tab rounded-none whitespace-nowrap border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-gray-100 shadow-none group group-data-[state=active]:shadow-none",
      className
    )}
    {...props}
    >
    {children}
    <div className="absolute h-[8px] w-full indicator group-data-[state=active]:bg-gray-100 mt-2 rounded-t-lg left-0 bottom-0" />
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    role="tabpanel"
    className={cn(
      "mt-2 ring-offset-background tab-panel transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
