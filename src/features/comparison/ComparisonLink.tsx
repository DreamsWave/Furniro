import { RootState } from "@/store";
import { BarChart2 } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ComparisonLink = () => {
  const comparisonProducts = useSelector(
    (state: RootState) => state.comparison.products,
  );

  return (
    <Link to="/comparison" className="relative">
      <BarChart2 size={28} />
      {comparisonProducts.length > 0 && (
        <span className="absolute bottom-0 right-0 flex h-4 w-4 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white font-poppinsBold text-sm text-primary ring-2 ring-primary">
          {comparisonProducts.length}
        </span>
      )}
    </Link>
  );
};

export default ComparisonLink;
