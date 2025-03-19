import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-full font-medium transition-all flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        primary:
          "bg-space-primary hover:bg-space-primary/80 text-white shadow-cosmic",
        secondary: "bg-space-secondary hover:bg-space-secondary/80 text-white",
        outline:
          "border border-solid border-space-light/20 hover:bg-space-light/5 text-space-light",
        ghost: "hover:bg-space-light/5 text-space-light",
        nebula: "bg-space-nebula hover:bg-space-nebula/80 text-white",
        cosmic: "bg-space-cosmic hover:bg-space-cosmic/80 text-white",
        luxury: "bg-dubai-gold hover:bg-dubai-luxury text-space-dark font-bold",
      },
      size: {
        sm: "text-xs h-8 px-3",
        md: "text-sm h-10 px-4",
        lg: "text-base h-12 px-6",
        xl: "text-lg h-14 px-8",
      },
      fullWidth: {
        true: "w-full",
      },
      withIcon: {
        true: "pl-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, fullWidth, withIcon, icon, children, ...props },
    ref
  ) => {
    return (
      <button
        className={buttonVariants({
          variant,
          size,
          fullWidth,
          withIcon,
          className,
        })}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
