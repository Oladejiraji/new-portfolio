import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  width?: number;
}

const HoverButton = ({
  children,
  onClick,
  className,
  isLoading,
  width = 200,
}: IProps) => {
  return (
    <button
      onClick={onClick}
      style={{ width }}
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-[grey] bg-[linear-gradient(110deg,transparent,45%,#333,55%,transparent)] bg-[length:200%_100%] px-10 font-medium  transition-colors ",
        className
      )}
    >
      {isLoading ? <span className="loader"></span> : children}
    </button>
  );
};

export default HoverButton;
