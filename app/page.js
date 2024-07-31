import Head from "next/head";
<<<<<<< HEAD
import Hero from "@/components/Navbar/Hero/page";
import "./globals.css";
import HowToRegister from "@/components/Register/HowToRegister";
import BestSeller from "@/components/BestSeller/BestSeller";
=======
import "./globals.css";
import HowToRegister from "@/components/Register/HowToRegister";
import BestSeller from "@/components/BestSeller/BestSeller";

>>>>>>> 9e8e47b (Create test)
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        {" "}
<<<<<<< HEAD
        <Hero />
=======
>>>>>>> 9e8e47b (Create test)
        <BestSeller />
        <HowToRegister />
      </main>
    </div>
  );
}
