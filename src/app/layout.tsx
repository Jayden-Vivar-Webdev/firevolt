import Navbar from "./partials/navbar";
import "./output.css";
import "./styles.css";
import Footer from "./partials/footer";
import QuickLink from "./partials/quicklink";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <link
          rel="preload"
          href="/images/compliance_img.webp"
          as="image"
        />
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
