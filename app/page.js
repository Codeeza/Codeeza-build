import Head from "next/head";
import Hero from "@/components/Navbar/Hero/page";
import "./globals.css";
import HowToRegister from "@/components/Register/HowToRegister";
import BestSeller from "@/components/BestSeller/BestSeller";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        {" "}
        <Hero />
        <BestSeller />
        <HowToRegister />
      </main>
    </>
  );
}
