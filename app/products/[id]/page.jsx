import { mockProducts } from "@/lib/db";
import ProductDetails from "../components/ProductDetails";

import { notFound } from "next/navigation";

export default function ProductPage({ params }) {
  const { id } = params;
  console.log("Product ID:", id);
  const product = mockProducts.find((product) => product.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
