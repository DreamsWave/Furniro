import { Link } from "react-router-dom";
import { User, Search, Heart, ShoppingCart, Menu } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white w-full sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center py-6 px-2 flex-wrap gap-4 lg:px-6">
        <Logo />
        <nav className="hidden lg:flex">
          <ul className="flex gap-4 text-black md:gap-8 lg:gap-16">
            <li className="inline-flex">
              <Link to={"/"} className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/shop"} className="hover:text-primary">
                Shop
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contacts"} className="hover:text-primary">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-4 md:gap-8 lg:gap-11">
          <li className="flex">
            <button className="hover:text-primary">
              <User size={28} />
            </button>
          </li>
          <li className="flex">
            <button className="hover:text-primary">
              <Search size={28} />
            </button>
          </li>
          <li className="flex">
            <button className="hover:text-primary">
              <Heart size={28} />
            </button>
          </li>
          <li className="flex">
            <button className="hover:text-primary">
              <ShoppingCart size={28} />
            </button>
          </li>
          <li className="flex lg:hidden">
            <button className="hover:text-primary">
              <Menu size={28} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
