// ComparisonTable.tsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/pages/Product/Header";
import { Product, ProductDetails, ProductDetailsCategory } from "@/types";
import { cn, toSpaceSeparated } from "@/utils";
import Button from "@/components/Button";
import { ChevronDown } from "lucide-react";
import ComparisonRemoveButton from "./ComparisonRemoveButton";

interface ComparisonTableProps {
  products: Product[];
}

const ProductCell = ({ product }: { product: Product }) => (
  <th className="group relative max-w-[350px] content-start p-4 text-start">
    <div className="mb-4 h-[180px] w-[280px] overflow-hidden rounded-lg">
      <img
        src={product.image}
        className="h-full w-full object-cover"
        alt={product.title}
      />
    </div>
    <Header product={product} small className="pr-4" linkableTitle />
    <ComparisonRemoveButton
      productId={product.id}
      className="absolute left-6 top-6 hidden group-hover:flex"
    />
  </th>
);

const ProductDetailsTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => (
  <tr>
    <td className={cn("max-w-[350px] p-4", className)}>
      <h3 className="font-poppinsMedium text-2xl capitalize">{title}</h3>
    </td>
  </tr>
);

const renderProductDetails = (
  category: ProductDetailsCategory,
  field: keyof ProductDetails,
  product: Product,
) => (
  <td key={product.id} className="max-w-[350px] p-4">
    {/* @ts-expect-error qwerty */}
    {product.details?.[category][field]}
  </td>
);

const renderTableCategory = (
  category: ProductDetailsCategory,
  products: Product[],
) => (
  <>
    <ProductDetailsTitle title={toSpaceSeparated(category)} className="pt-16" />
    {Object.keys(products[0].details[category]).map((field) => (
      <tr key={field}>
        <td className="max-w-[350px] p-4 capitalize">
          {toSpaceSeparated(field)}
        </td>
        {products.map((product) =>
          renderProductDetails(
            category,
            field as keyof ProductDetails,
            product,
          ),
        )}
      </tr>
    ))}
  </>
);

const ComparisonTable: React.FC<ComparisonTableProps> = ({ products }) => {
  return (
    <table className="mb-28 mt-8 table-auto overflow-x-auto">
      <thead>
        <tr>
          <th className="flex w-[350px] flex-col content-start items-start justify-start p-4 text-start">
            <h4 className="mb-4 font-poppinsMedium text-2xl">
              Go to Product page for more Products
            </h4>
            <Link
              to={"/shop"}
              className="poppins border-b-2 border-text-color-300 text-xl text-text-color-300"
            >
              View More
            </Link>
          </th>
          {products.map((product) => (
            <ProductCell key={product.id} product={product} />
          ))}
          <th className="flex w-[350px] flex-col content-start items-start justify-start p-4 text-start">
            <h4 className="mb-4 font-poppinsMedium text-2xl">Add A Product</h4>
            <Button className="flex w-full max-w-[240px] items-center rounded-md px-4 py-2 font-poppinsSemibold text-sm capitalize">
              Choose a Product
              <ChevronDown className="ml-auto" />
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {renderTableCategory("general", products)}
        {renderTableCategory("product", products)}
        {renderTableCategory("dimensions", products)}
        {renderTableCategory("warranty", products)}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
