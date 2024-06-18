import Layout from "@/components/Layout";
import ProductsGrid from "@/components/ProductsGrid";
import useProducts from "@/hooks/useProducts";
import Hero from "@/components/Hero";
import PageBar from "@/components/PageBar";
import { LayoutGrid, Rows3, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Product, ProductsSortByTypes } from "@/types";
import { getProducts } from "@/products";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { cn } from "@/utils";
import Select from "@/components/Select";

const Shop = () => {
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState<ProductsSortByTypes>("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const totalProducts = useProducts().length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    async function loadProducts() {
      const fromCount = (currentPage - 1) * productsPerPage;
      const loadedProducts = await getProducts({
        count: productsPerPage,
        from: fromCount,
        sortBy,
      });
      setProducts(loadedProducts);
    }
    loadProducts();
  }, [currentPage, productsPerPage, sortBy]);

  const handlePreviousClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <PaginationItem key={i}>
        <PaginationLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageClick(i);
          }}
          aria-current={currentPage === i ? "page" : undefined}
          className={cn(
            "bg-primary-light p-8 font-poppins text-xl text-text-color hover:bg-primary hover:text-white",
            currentPage === i && "bg-primary text-white",
          )}
        >
          {i}
        </PaginationLink>
      </PaginationItem>,
    );
  }

  return (
    <Layout showFeature={true} pageTitle="Shop">
      <Hero heroName="Shop" />
      <PageBar>
        <div className="flex justify-between">
          <div className="flex items-center justify-center space-x-6">
            <button className="flex items-center justify-center space-x-3">
              <SlidersHorizontal />
              <span>Filter</span>
            </button>
            <button>
              <LayoutGrid />
            </button>
            <button>
              <Rows3 />
            </button>
            <div className="h-10 w-[2px] bg-text-color-400"></div>
            <p>
              Showing {(currentPage - 1) * productsPerPage + 1}–
              {Math.min(currentPage * productsPerPage, totalProducts)} of{" "}
              {totalProducts} results
            </p>
          </div>
          <div className="flex items-end space-x-8">
            <div className="flex items-center space-x-4">
              <span className="text-xl">Show</span>
              <Select
                defaultValue={String(productsPerPage)}
                placeholder={String(productsPerPage)}
                options={[
                  { value: "8", text: "8" },
                  { value: "16", text: "16" },
                  { value: "24", text: "24" },
                ]}
                onValueChange={(value) => setProductsPerPage(+value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl">Sort by</span>
              <Select
                defaultValue={sortBy}
                placeholder={sortBy}
                options={[
                  { value: "default", text: "default" },
                  { value: "price", text: "price" },
                  { value: "name", text: "name" },
                ]}
                onValueChange={(value) =>
                  setSortBy(value as ProductsSortByTypes)
                }
              />
            </div>
          </div>
        </div>
      </PageBar>
      <div className="container mx-auto px-2 py-8 lg:px-8">
        <ProductsGrid products={products} />
      </div>
      <Pagination className="select-none">
        <PaginationContent className="gap-9">
          <PaginationItem
            className={cn(
              "cursor-pointer",
              currentPage === 1 && "cursor-auto opacity-0",
            )}
          >
            <PaginationPrevious
              onClick={handlePreviousClick}
              className="bg-primary-light p-8 font-poppins text-xl text-text-color hover:bg-primary hover:text-white"
            />
          </PaginationItem>
          {pageNumbers}
          <PaginationItem
            className={cn(
              "cursor-pointer",
              currentPage === totalPages && "cursor-auto opacity-0",
            )}
          >
            <PaginationNext
              onClick={handleNextClick}
              className="bg-primary-light p-8 font-poppins text-xl text-text-color hover:bg-primary hover:text-white"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Layout>
  );
};

export default Shop;
