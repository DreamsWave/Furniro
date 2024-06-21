import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Cart from "@/features/cart/Cart";

const CartPage = () => {
  return (
    <Layout showBenefits>
      <Hero heroName="Cart" />
      <Cart />
    </Layout>
  );
};

export default CartPage;
