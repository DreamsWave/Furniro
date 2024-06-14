import Layout from "@/components/Layout";
import Hero from "./Hero";
import BrowseTheRange from "./BrowseTheRange";
import OurProducts from "./OurProducts";

const HomePage = () => {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <BrowseTheRange />
      <OurProducts />
    </Layout>
  );
};

export default HomePage;
