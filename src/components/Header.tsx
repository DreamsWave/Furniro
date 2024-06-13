import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white w-full">
      <nav>
        <ul className="flex gap-2 text-black">
          <li className="inline-flex">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
