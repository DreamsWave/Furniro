import { Link } from "react-router-dom";
import LogoImage from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex gap-1">
      <img
        src={LogoImage}
        alt="Furniro logo image"
        className="object-contain w-[30px] lg:w-[50px]"
      />
      <h1 className="font-montserrat text-text-color font-bold text-2xl lg:text-[32px]">
        Furniro
      </h1>
    </Link>
  );
};

export default Logo;
