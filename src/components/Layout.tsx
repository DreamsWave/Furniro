import { Helmet } from "react-helmet";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
  showFeature?: boolean;
  pageTitle?: string;
}
const Layout = ({
  children,
  showFeature = false,
  pageTitle = "",
}: LayoutProps) => {
  return (
    <div>
      {pageTitle && (
        <Helmet>
          <title>{pageTitle} - Furniro</title>
        </Helmet>
      )}
      <Header />
      <main>
        {children}
        {showFeature && <Feature />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
