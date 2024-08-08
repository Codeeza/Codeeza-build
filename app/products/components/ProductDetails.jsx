import Image from "next/image";
import PriceTag from "@/components/PriceTag/PriceTag";
import AddToCardButton from "@/components/AddToCardButton/AddToCardButton";
import PropTypes from "prop-types";

export default function ProductDetails({ product }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <div>
        <h1 className="text-5xl font-bold">{product.title}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
        <AddToCardButton productId={product.id} />
      </div>
    </div>
  );
}
ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
