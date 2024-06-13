import { Helmet } from "react-helmet";
import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";

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
