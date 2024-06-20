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
import { Separator } from "@/components/ui/separator";

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
      <div className="grid-col-1 md:grid-col-2 container grid gap-x-20 gap-y-10 py-8 pb-14 md:grid-cols-[repeat(2,_1fr)]">
        <Header product={product} className="md:col-span-2 md:col-start-2" />
        <Gallery
          product={product}
          className="md:col-span-1 md:row-span-2 md:row-start-1"
        />
        <Actions product={product} className="md:col-span-2 md:col-start-2" />
      </div>
      <Separator />
      <Information />
      <RelatedProducts products={relatedProducts} />
    </Layout>
  );
};

export default ProductPage;
