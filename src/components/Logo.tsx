import { Link } from "react-router-dom";
import LogoImage from "../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex gap-1">
      <img
        src={LogoImage}
        alt="Furniro logo image"
        width="50"
        className="object-contain"
      />
      <h1 className="font-montserrat text-text-color text-[32px] font-bold">
        Furniro
      </h1>
    </Link>
  );
};

export default Logo;
