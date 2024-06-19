import Layout from "@/components/Layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <div className="container flex justify-center py-8">
        <h1 className="text-5xl">Page not found</h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
