import { Link } from "react-router-dom";
import LogoImage from "@/assets/images/logo.png";
import { cn } from "@/utils";

interface LogoProps {
  shrinkable?: boolean;
}

const Logo = ({ shrinkable = false }: LogoProps) => {
  return (
    <Link to="/" className="flex gap-1">
      <img
        src={LogoImage}
        alt="Furniro logo image"
        className="w-[30px] object-contain lg:w-[50px]"
      />
      <h1
        className={cn(
          "font-montserrat text-2xl font-bold text-text-color lg:text-[32px]",
          shrinkable && "hidden sm:flex",
        )}
      >
        Furniro
      </h1>
    </Link>
  );
};

export default Logo;
