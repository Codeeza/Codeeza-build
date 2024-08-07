import "./globals.css";
import CustomContainer from "@/components/CustomContainer/CustomContainer";
import HowToRegister from "@/components/Register/HowToRegister";
import BestSeller from "@/components/BestSeller/BestSeller";
import ProductSection from "@/components/ProductSection/ProductSection";
import CarouselPlugin from "@/components/Carousel/CarouselPlugin";
export default function Home() {
  return (
    <div>
    
      <main>
        {" "}
        <CarouselPlugin />
        <ProductSection />
        <BestSeller />
        <CustomContainer />
        <HowToRegister />
      </main>
    </div>
  );
}
