import Layout from "../components/Layout";
import { Counter } from "../features/counter/Counter";

const HomePage = () => {
  return (
    <Layout>
      Home page
      <Counter />
    </Layout>
  );
};

export default HomePage;
