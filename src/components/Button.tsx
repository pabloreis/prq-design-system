import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  isFullWidth?: boolean;
}

export function Button({
  children,
  asChild,
  isFullWidth = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        {
          "w-full": isFullWidth,
        }
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
