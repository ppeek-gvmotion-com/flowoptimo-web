import { clsx } from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, asChild, ...props },
    ref
  ) {
    const classes = twMerge(
      clsx(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-accent text-white hover:bg-accent-dark focus:ring-accent":
            variant === "primary",
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500":
            variant === "secondary",
          "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500":
            variant === "outline",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        }
      ),
      className
    );

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
