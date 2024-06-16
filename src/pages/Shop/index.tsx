import Layout from "@/components/Layout";
import ProductsGrid from "@/components/ProductsGrid";
import useProducts from "@/hooks/useProducts";

const Shop = () => {
  const products = useProducts({ count: 16 });
  return (
    <Layout showFeature={true} pageTitle="Shop">
      <div className="container px-2 py-8 mx-auto lg:px-8">
        <ProductsGrid products={products} />
      </div>
    </Layout>
  );
};

export default Shop;
