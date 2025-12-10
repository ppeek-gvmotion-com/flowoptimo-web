import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  highlight?: boolean;
}

export function Card({ className, children, highlight }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "rounded-xl border bg-white p-6 shadow-sm",
          highlight
            ? "border-accent ring-2 ring-accent"
            : "border-gray-200"
        ),
        className
      )}
    >
      {children}
    </div>
  );
}
