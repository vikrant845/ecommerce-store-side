import { cn } from "@/lib/urils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  className?: string;
  icon: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton: React.FC<IconButtonProps> = ({ className, onClick, icon }) => {
  return (
    <button 
      onClick={ onClick } 
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className
      )}
    >
      {icon}
    </button>
  );
}

export default IconButton;