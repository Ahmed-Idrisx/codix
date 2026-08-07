import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MainButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  fullWidth?: boolean;
  children: ReactNode;
};

const MainButton = ({
  type = "submit",
  className,
  fullWidth = false,
  children,
}: MainButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "rounded-xl bg-blue-900 py-4 px-12 font-semibold text-white shadow-lg transition hover:opacity-90 active:scale-98",
        fullWidth ? "w-full" : "w-fit",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default MainButton;
