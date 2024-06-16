import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");

  function handleNewsletterSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <footer className="border-[1px] border-[#d9d9d9]">
      <div className="flex justify-center container mx-auto px-2 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-16 items-start justify-center md:justify-items-stretch md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-poppinsBold text-2xl mb-6 md:mb-10 lg:mb-12">
              Furniro.
            </h3>
            <p className="font-poppins text-base text-text-color-400">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          <div className="flex space-x-12 md:row-span-2 md:justify-around">
            <div>
              <h4 className="font-poppinsMedium text-base mb-6 text-text-color-400 md:mb-10 lg:mb-12">
                Links
              </h4>
              <ul className="font-poppinsMedium text-base space-y-6 md:space-y-8 lg:space-y-12">
                <li>
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
                  <Link to={"/contact"} className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppinsMedium text-base mb-6 text-text-color-400 md:mb-10 lg:mb-12">
                Help
              </h4>
              <ul className="font-poppinsMedium text-base space-y-6 md:space-y-12">
                <li>
                  <Link to={"/payment-options"} className="hover:text-primary">
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link to={"/returns"} className="hover:text-primary">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link to={"/privacy-policies"} className="hover:text-primary">
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-poppinsMedium text-base mb-6 text-text-color-400 md:mb-10 lg:mb-12">
              Newsletter
            </h4>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="font-poppins text-sm bg-transparent border-b-[1px] border-b-black mr-3 py-1 outline-none placeholder:text-text-color-400"
                placeholder="Enter Your Email Address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button
                type="submit"
                className="uppercase font-poppinsMedium text-sm border-b-[1px] py-1 border-b-black hover:text-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container border-t-[1px] border-[#d9d9d9] py-9 font-poppins text-base">
        <p>2024 funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
