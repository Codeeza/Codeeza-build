import Head from "next/head";
import "./globals.css";
import HowToRegister from "@/components/Register/HowToRegister";
import BestSeller from "@/components/BestSeller/BestSeller";
import ProductSection from "@/components/ProductSection/ProductSection";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        {" "}
        <ProductSection />
        <BestSeller />
        <HowToRegister />
      </main>
    </div>
  );
}
