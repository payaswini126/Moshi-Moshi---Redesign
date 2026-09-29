import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border text-sm font-bold uppercase transition-[transform,background-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-primary bg-primary px-6 text-primary-foreground hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground",
        default: "border-primary bg-primary px-6 text-primary-foreground hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground",
        outline: "border-border bg-transparent px-6 text-foreground hover:-translate-y-1 hover:bg-foreground hover:text-background",
        icon: "size-12 border-border bg-transparent text-foreground hover:rotate-6 hover:bg-accent hover:text-accent-foreground",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-3",
        lg: "h-14 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };