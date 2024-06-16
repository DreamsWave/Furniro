import Layout from "@/components/Layout";
import Hero from "./Hero";
import BrowseTheRange from "./BrowseTheRange";
import OurProducts from "./OurProducts";
import Inspirations from "./Inspirations";
import ShareSetup from "./ShareSetup";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <BrowseTheRange />
      <OurProducts />
      <Inspirations />
      <ShareSetup />
    </Layout>
  );
};

export default Home;
