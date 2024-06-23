import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Comparison from "@/features/comparison/Comparison";

const ComparisonPage = () => {
  return (
    <Layout>
      <Hero heroName="Comparison" title="Product Comparison" />

      <Comparison />
    </Layout>
  );
};

export default ComparisonPage;
