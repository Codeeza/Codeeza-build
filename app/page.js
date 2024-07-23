import Head from "next/head";
import Hero from "@/components/Navbar/Hero/page";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        {" "}
        <Hero />
      </main>
    </>
  );
}
