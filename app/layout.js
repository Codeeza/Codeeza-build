import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer/Footer";
import CopyRight from "@/components/CopyRight/CopyRight";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Captivity-Headwear And Apparel",
  description: "Headwear and Apparel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg">
          <Navbar />
          <Categories />
          {children}
          <Footer />
          <CopyRight />
        </div>
      </body>
    </html>
  );
}
