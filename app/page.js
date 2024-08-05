import Head from "next/head";
import "./globals.css";
import CustomContainer from "@/components/CustomContainer/CustomContainer";
import HowToRegister from "@/components/Register/HowToRegister";
import BestSeller from "@/components/BestSeller/BestSeller";
import ProductSection from "@/components/ProductSection/ProductSection";
import Carousel from "@/components/SmallCarousel/SmallCarousel";
import Link from "next/link";
export default function Home() {
  return (
    <div>
    
      <main>
        {" "}
        <ProductSection />
        <Carousel />
        <BestSeller />
        <CustomContainer />
        <HowToRegister />
      </main>
    </div>
  );
}
