interface PageBarProps {
  children?: React.ReactNode;
}
const PageBar = ({ children }: PageBarProps) => {
  return (
    <div className="relative min-h-[100px] bg-primary-light py-8 font-poppins text-base">
      <div className="container mx-auto px-2 lg:px-8">{children}</div>
    </div>
  );
};

export default PageBar;
