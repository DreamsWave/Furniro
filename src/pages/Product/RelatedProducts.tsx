import Button from "@/components/Button";
import ProductsGrid from "@/components/ProductsGrid";
import { Product } from "@/types";

interface RelatedProductsProps {
  products: Product[];
}
const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <section className="mt-14 pb-16">
      <div className="container flex flex-col items-center">
        <h2 className="mb-8 font-poppinsBold text-4xl font-bold text-text-color-100">
          Related Products
        </h2>
        <ProductsGrid products={products.slice(0, 4)} showCount={4} />
        <Button outlined wide linkTo="/shop">
          Show More
        </Button>
      </div>
    </section>
  );
};

export default RelatedProducts;
