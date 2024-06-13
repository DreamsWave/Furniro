import { Link } from "react-router-dom";
import { User, Search, Heart, ShoppingCart } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white w-full">
      <div className="container mx-auto flex justify-between items-center py-9">
        <Logo />
        <nav>
          <ul className="flex gap-16 text-black">
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
        <ul className="flex gap-11">
          <li>
            <button className="hover:text-primary">
              <User size={28} />
            </button>
          </li>
          <li>
            <button className="hover:text-primary">
              <Search size={28} />
            </button>
          </li>
          <li>
            <button className="hover:text-primary">
              <Heart size={28} />
            </button>
          </li>
          <li>
            <button className="hover:text-primary">
              <ShoppingCart size={28} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
