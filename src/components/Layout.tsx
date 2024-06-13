import Feature from "./Feature";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  showFeature?: boolean;
}
const Layout = ({ children, showFeature = false }: LayoutProps) => {
  return (
    <div>
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
