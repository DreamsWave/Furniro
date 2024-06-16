import Button from "@/components/Button";
import ProductsGrid from "@/components/ProductsGrid";
import { useEffect, useState, useCallback } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import useProducts from "@/hooks/useProducts";

const OurProducts = () => {
  const { theme } = resolveConfig({
    content: tailwindConfig.content,
    theme: tailwindConfig.theme,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showCount, setShowCount] = useState(4);
  const products = useProducts({ count: 8 });

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
  const getShowCount = useCallback(() => {
    const defaultDisplay = 4;
    const mediumDisplay = 6;
    const largeDisplay = 8;

    if (windowWidth >= parseInt(breakpoints.lg)) {
      return largeDisplay;
    } else if (windowWidth >= parseInt(breakpoints.md)) {
      return mediumDisplay;
    }
    return defaultDisplay;
  }, [windowWidth, breakpoints.lg, breakpoints.md]);

  // useEffect to add and remove the resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setShowCount(getShowCount());
  }, [windowWidth, getShowCount]);

  return (
    <section className="mt-14 pb-14">
      <div className="container mx-auto px-2 flex flex-col items-center lg:px-6">
        <h2 className="font-poppinsBold text-4xl font-bold text-text-color-100 mb-8">
          Our Products
        </h2>
        <ProductsGrid products={products} showCount={showCount} />
        <Button outlined wide linkTo="/shop">
          Show More
        </Button>
      </div>
    </section>
  );
};

export default OurProducts;
