import Head from "next/head";
import BestSeller from "../components/BestSeller/BestSeller.js"
import Hero from "./Navbar/Hero/page.js";
import HowToRegister from "@/components/Register/HowToRegister.js";

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
