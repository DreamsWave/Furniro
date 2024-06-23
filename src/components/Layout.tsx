import { Helmet } from "react-helmet-async";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
  showBenefits?: boolean;
  pageTitle?: string;
}
const Layout = ({
  children,
  showBenefits = false,
  pageTitle = "",
}: LayoutProps) => {
  return (
    <div>
      <ScrollToTop />
      {pageTitle && (
        <Helmet>
          <title>{pageTitle} - Furniro</title>
        </Helmet>
      )}
      <Header />
      <main>
        {children}
        {showBenefits && <Benefits />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
