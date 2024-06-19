import ProductGridElement from "@/components/ProductGridElement";
import { Product } from "@/types";

interface ProductsGridProps {
  products: Product[];
  showCount?: number;
}
const ProductsGrid = ({ products, showCount }: ProductsGridProps) => {
  return (
    <ul className="mb-8 grid auto-rows-auto grid-cols-[repeat(2,_minmax(150px,_1fr))] gap-2 md:grid-cols-[repeat(3,_minmax(200px,_1fr))] lg:md:grid-cols-[repeat(4,_minmax(200px,_1fr))] lg:gap-8">
      {products.slice(0, showCount).map((product) => (
        <li key={product.id}>
          <ProductGridElement
            product={product}
            linkTo={`/product/${product.id}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductsGrid;
