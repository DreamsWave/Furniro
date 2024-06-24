import { cn } from "@/utils";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  outlined?: boolean;
  linkTo?: string;
  secondary?: boolean;
  className?: string;
  wide?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

const Button = ({
  children,
  outlined = false,
  linkTo = "",
  secondary = false,
  wide = false,
  className = "",
  onClick,
}: ButtonProps) => {
  const buttonClassName = cn(
    "w-fit bg-primary border-2 border-primary text-white uppercase px-14 py-4 inline-flex transition-all hover:bg-white hover:text-primary whitespace-nowrap",
    outlined && "bg-white text-primary hover:bg-primary hover:text-white",
    secondary && "border-white py-3 px-14 hover:border-primary",
    wide && "py-3 px-20",
    className,
  );

  return linkTo ? (
    <Link to={linkTo} className={buttonClassName} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
