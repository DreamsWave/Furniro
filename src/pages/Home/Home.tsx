import Layout from "@/components/Layout";
import Hero from "./Hero";
import BrowseTheRange from "./BrowseTheRange";
import OurProducts from "./OurProducts";
import Inspirations from "./Inspirations";

const HomePage = () => {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <BrowseTheRange />
      <OurProducts />
      <Inspirations />
    </Layout>
  );
};

export default HomePage;
