import Navbar from "./partials/navbar";
import "./output.css";
import "./styles.css";
import Footer from "./partials/footer";
import QuickLink from "./partials/quicklink";
import FreeQuote from "./partials/free_quote";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      

      <body>
      <Navbar />
        {children}
        <QuickLink />
        <Footer />
        <FreeQuote />
      </body>
    </html>
  );
};

export default Layout;
