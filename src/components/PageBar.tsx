import { cn } from "@/utils";

interface PageBarProps {
  children?: React.ReactNode;
  className?: string;
}
const PageBar = ({ children, className = "" }: PageBarProps) => {
  return (
    <div
      className={cn(
        className,
        "relative min-h-[100px] bg-primary-light py-8 font-poppins text-base",
      )}
    >
      <div className="container">{children}</div>
    </div>
  );
};

export default PageBar;
