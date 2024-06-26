import { NavLink } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import Logo from "@/components/Logo";
import CartDialog from "@/features/cart/CartDialog";
import ComparisonLink from "@/features/comparison/ComparisonLink";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils";

export const SideMenuNavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="group mx-2 cursor-pointer rounded-lg hover:bg-primary-light">
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            "inline-flex w-full p-4 group-hover:text-primary",
            isActive && "text-primary",
          )
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="container-full flex flex-wrap items-center justify-between gap-2 py-6 md:gap-4">
        <Logo shrinkable />
        <nav className="hidden md:flex">
          <ul className="flex gap-4 text-black md:gap-8 lg:gap-16">
            <li className="inline-flex">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary",
                    isActive && "text-primary hover:text-primary/80",
                  )
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary",
                    isActive && "text-primary hover:text-primary/80",
                  )
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contacts"}
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary",
                    isActive && "text-primary hover:text-primary/80",
                  )
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-4 md:gap-8 lg:gap-11">
          <li className="flex">
            <button className="hover:text-primary">
              <Search size={28} />
            </button>
          </li>
          <li className="hidden sm:flex">
            <ComparisonLink />
          </li>
          <li className="flex">
            <CartDialog />
          </li>
          <li className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="hover:text-primary">
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent className="p-0">
                <SheetHeader>
                  <SheetDescription>
                    <SheetTitle className="p-4 font-poppinsLight text-2xl text-text-color-200">
                      Navigation
                    </SheetTitle>
                    <Separator orientation="horizontal" />
                    <nav className="font-poppins text-xl">
                      <ul className="my-2 flex flex-col gap-2">
                        <SideMenuNavItem to="/">Home</SideMenuNavItem>
                        <SideMenuNavItem to="/shop">Shop</SideMenuNavItem>
                        <SideMenuNavItem to="/contacts">
                          Contacts
                        </SideMenuNavItem>
                      </ul>
                      <Separator orientation="horizontal" />
                      <ul className="my-2 flex flex-col gap-2">
                        <SideMenuNavItem to="/comparison">
                          Comparison
                        </SideMenuNavItem>
                        <SideMenuNavItem to="/cart">Cart</SideMenuNavItem>
                        <SideMenuNavItem to="/checkout">
                          Checkout
                        </SideMenuNavItem>
                      </ul>
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
