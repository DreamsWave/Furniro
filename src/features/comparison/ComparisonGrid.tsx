import { Product } from "@/types";
import { cn } from "@/utils";

interface ComparisonGridProps {
  products?: Product[];
  className?: string;
}

const ComparisonGrid = ({ products = [], className }: ComparisonGridProps) => {
  if (!products.length)
    return (
      <div
        className={cn(
          className,
          "container font-poppins text-xl text-text-color",
        )}
      >
        Comparison is empty
      </div>
    );

  return (
    <div
      className={cn(
        className,
        "container font-poppins text-xl text-text-color",
      )}
    >
      <div className="mb-20">
        <h3
          className={cn(
            "mb-7 mt-10 font-poppinsMedium text-3xl text-text-color",
          )}
        >
          General
        </h3>
        <div className={cn("flex")}>
          <ul className="flex max-w-[340px] flex-col gap-8 border-r-[1px] border-[#e8e8e8] pr-14">
            <li>Sales Package</li>
            <li>Model Number</li>
            <li>Secondary Material</li>
            <li>Configuration</li>
            <li>Upholstery Material</li>
            <li>Upholstery Color</li>
          </ul>
          {products.map((product) => {
            const info = product.details?.general;
            return (
              <ul
                key={product.id}
                className="flex max-w-[350px] flex-col gap-8 p-14"
              >
                {info &&
                  Object.keys(info).map((key, index) => (
                    <li key={index}>{info[key]}</li>
                  ))}
              </ul>
            );
          })}
        </div>
      </div>
      <div className="mb-20">
        <h3 className="mb-7 font-poppinsMedium text-3xl text-text-color">
          Product
        </h3>
        <div className="flex">
          <ul className="flex max-w-[350px] flex-col gap-8 p-14">
            <li>Filling Material</li>
            <li>Finish Type</li>
            <li>Adjustable Headrest</li>
            <li>Maximum Load Capacity</li>
            <li>Origin of Manufacture</li>
          </ul>
          {products.map((product) => {
            const info = product.details?.product;
            return (
              <ul
                key={product.id}
                className="flex max-w-[350px] flex-col gap-8 p-14"
              >
                {info &&
                  Object.keys(info).map((key, index) => (
                    <li key={index}>{info[key]}</li>
                  ))}
              </ul>
            );
          })}
        </div>
      </div>
      <div className="mb-20">
        <h3 className="mb-7 font-poppinsMedium text-3xl text-text-color">
          Dimensions
        </h3>
        <div className="flex">
          <ul className="flex max-w-[350px] flex-col gap-8 p-14">
            <li>Width</li>
            <li>Height</li>
            <li>Depth</li>
            <li>Weight</li>
            <li>Seat Height</li>
            <li>Leg Height</li>
          </ul>
          {products.map((product) => {
            const info = product.details?.dimensions;
            return (
              <ul
                key={product.id}
                className="flex max-w-[350px] flex-col gap-8 p-14"
              >
                {info &&
                  Object.keys(info).map((key, index) => (
                    <li key={index}>{info[key]}</li>
                  ))}
              </ul>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="mb-7 font-poppinsMedium text-3xl text-text-color">
          Warranty
        </h3>
        <div className="flex">
          <ul className="flex max-w-[350px] flex-col gap-8 p-14">
            <li>Warranty Summary</li>
            <li>Warranty Service Type</li>
            <li>Covered in Warranty</li>
            <li>Not Covered in Warranty</li>
            <li>Domestic Warranty</li>
          </ul>
          {products.map((product) => {
            const info = product.details?.warranty;
            return (
              <ul
                key={product.id}
                className="flex max-w-[350px] flex-col gap-8 p-14"
              >
                {info &&
                  Object.keys(info).map((key, index) => (
                    <li key={index}>{info[key]}</li>
                  ))}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparisonGrid;
