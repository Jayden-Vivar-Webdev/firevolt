import Navbar from "./partials/navbar";
import "./output.css";
import "./styles.css";
import Footer from "./partials/footer";
import QuickLink from "./partials/quicklink";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      

      <body>
      <Navbar />
        {children}
        <QuickLink />
        <Footer />
        
      </body>
    </html>
  );
};

export default Layout;
