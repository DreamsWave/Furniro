import Button from "../../components/Button";
import Product from "./Product";
import products from "./products";

const OurProducts = () => {
  return (
    <section className="mt-14">
      <div className="container mx-auto px-2 flex flex-col items-center lg:px-6">
        <h2 className="font-poppinsBold text-4xl font-bold text-text-color-100 mb-8">
          Our Products
        </h2>
        <ul className="grid grid-cols-2 gap-2 mb-8 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8">
          {products.map((product) => (
            <li key={product.id}>
              <Product {...product} linkTo={`/product-${product.id}`} />
            </li>
          ))}
        </ul>
        <Button outlined linkTo="/products">
          Show More
        </Button>
      </div>
    </section>
  );
};

export default OurProducts;
