import { getProduct, getProducts } from "@/products";
import { Product } from "@/types";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageBar from "@/components/PageBar";
import Breadcrumbs from "./Breadcrumbs";
import Gallery from "./Gallery";
import Actions from "./Actions";
import Header from "./Header";
import Information from "./Information";
import RelatedProducts from "./RelatedProducts";

const ProductPage = () => {
  const { id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    async function loadProduct() {
      if (!id) return;
      const product = await getProduct(id);
      setProduct(product);
    }
    loadProduct();
  }, [id]);

  useEffect(() => {
    async function loadRelatedProducts() {
      const products = await getProducts({ count: 4 });
      setRelatedProducts(products);
    }
    loadRelatedProducts();
  }, [id]);

  if (!product) return "...";

  return (
    <Layout pageTitle={product?.title ? product.title : "Product"}>
      <PageBar className="flex items-center">
        <Breadcrumbs title={product?.title ? product.title : "..."} />
      </PageBar>
      <div className="grid-col-1 md:grid-col-2 grid">
        <Header product={product} />
        <Gallery />
        <Actions />
      </div>
      <Information />
      <RelatedProducts products={relatedProducts} />
    </Layout>
  );
};

export default ProductPage;
