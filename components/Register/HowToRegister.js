"use client";
import Image from "next/image";
import Link from "next/link";
import FlipSection from "../FlipImage/FlipSection";

const HowToRegister = () => {
  return (
    <div>
      <section className="bg-black text-center text-white py-16">
        <h1 className="text-2xl font-bold">HOW TO REGISTER?</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Captivity is strictly distributed via authorised distributors namely:
          promotional companies, advertising and event companies as well as
          independent resellers. We have a large offering of headwear and
          apparel and are distributors of a large selection of promotional
          items. Should you fall into either of these categories and would like
          to register as a vendor?
        </p>
        <Link href="/register">
          <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
            Register Here
          </button>
        </Link>
      </section>
      <FlipSection />
    </div>
  );
};

export default HowToRegister;
