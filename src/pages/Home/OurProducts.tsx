import { useEffect, useState, useCallback } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import Button from "@/components/Button";
import Product from "./Product";
import products from "./products";
import tailwindConfig from "../../../tailwind.config";

const OurProducts = () => {
  const { theme } = resolveConfig({
    content: tailwindConfig.content,
    theme: tailwindConfig.theme,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedProducts, setDisplayedProducts] = useState(products);

  // Tailwind CSS default breakpoints
  const breakpoints = {
    sm: theme.screens.sm,
    md: theme.screens.md,
    lg: theme.screens.lg,
    xl: theme.screens.xl,
    "2xl": theme.screens["2xl"],
  };

  // Handler to update the window width state
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // Determine the number of products to display based on the window width
  const getDisplayedProducts = useCallback(() => {
    const defaultDisplay = 4;
    const mediumDisplay = 6;
    const largeDisplay = 8;

    if (windowWidth >= parseInt(breakpoints.lg)) {
      return products.slice(0, largeDisplay);
    } else if (windowWidth >= parseInt(breakpoints.md)) {
      return products.slice(0, mediumDisplay);
    }
    return products.slice(0, defaultDisplay);
  }, [windowWidth, breakpoints.lg, breakpoints.md]); // Add dependencies here

  // useEffect to add and remove the resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setDisplayedProducts(getDisplayedProducts());
  }, [windowWidth, getDisplayedProducts]);

  return (
    <section className="mt-14 pb-10">
      <div className="container mx-auto px-2 flex flex-col items-center lg:px-6">
        <h2 className="font-poppinsBold text-4xl font-bold text-text-color-100 mb-8">
          Our Products
        </h2>
        <ul className="grid grid-cols-2 gap-2 mb-8 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8">
          {displayedProducts.map((product) => (
            <li key={product.id}>
              <Product {...product} linkTo={`/product-${product.id}`} />
            </li>
          ))}
        </ul>
        <Button outlined wide linkTo="/products">
          Show More
        </Button>
      </div>
    </section>
  );
};

export default OurProducts;
