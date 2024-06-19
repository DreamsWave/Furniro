import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }: { title?: string }) => {
  return (
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
            {title ? title : "..."}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
