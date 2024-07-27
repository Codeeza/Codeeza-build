import Head from "next/head";
import Hero from "./navbar/Hero/page";

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
