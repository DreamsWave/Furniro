import { getProduct } from "@/products";
import { Product } from "@/types";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import PageBar from "@/components/PageBar";
import { ChevronRight } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    async function loadProduct() {
      if (!id) return;
      const product = await getProduct(id);
      setProduct(product);
    }
    loadProduct();
  }, [id]);

  return (
    <Layout pageTitle={product?.title ? product.title : "Product"}>
      <PageBar className="flex items-center">
        <Breadcrumb className="font-poppins text-base">
          <BreadcrumbList className="space-x-4">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-base text-text-color-400">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <ChevronRight size={20} className="stroke-text-color" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/shop" className="text-base text-text-color-400">
                  Shop
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <ChevronRight size={20} className="stroke-text-color" />
            <div className="h-10 w-[2px] bg-text-color-400"></div>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base">
                {product?.title ? product.title : "..."}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageBar>
      {!product && "Loading..."}
      <div>{product?.title}</div>
    </Layout>
  );
};

export default ProductPage;
