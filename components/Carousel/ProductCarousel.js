import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            {/* <Image src={product.image} alt={product.name} fluid /> */}
            <Image
              src="https://captivity.co.za/product/basic-sweater/"
              alt={product.crewneck}
            />
            <Image
              src="https://captivity.co.za/product/long-sleeve-golfer/"
              alt={product.newlongsleeve}
            />
            <Image
              src="https://captivity.co.za/product/alaska-puffer-jacket/"
              alt={product.alaska}
            />
            <Image
              src="https://captivity.co.za/product/ice-beanie/?v=e4dd286dc7d7"
              alt={product.ice}
            />
            <Carousel.Caption className="carousel-caption">
              <h2 className="text-white text-right">
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
