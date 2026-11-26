import { Col } from "react-bootstrap";
import { COLOURS } from "../utils/constants";
import "../styles/component_styles/offer.scss";
// images
import Feed4Img from "../assets/stock-images/4for40.jpg";
import DessertImg from "../assets/stock-images/dessert.jpg";
import PizzaImg from "../assets/stock-images/pizza.jpg";

export default function Offer({
  image,
  children,
}: {
  image: string;
  children: string | React.ReactNode;
}) {
  const imageVariants = {
    "feed-4": Feed4Img,
    dessert: DessertImg,
    pizza: PizzaImg,
  };
  return (
    <Col className="m-3 offer">
      <div
        className="h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex flex-column justify-content-end"
        style={{
          backgroundImage: `url(${imageVariants[image as keyof typeof imageVariants]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "400px",
          minWidth: "250px",
        }}
      >
        <div className="d-flex flex-column offer-info p-3 w-100 pb-3 text-shadow-1 text-center">
          <h3 className="font-kameron display-8 lh-1 fw-bold text-shadow">
            {children}
          </h3>
          <button className="btn redeem-btn text-white px-md-5 mt-auto">
            Use offer
          </button>
        </div>
      </div>
    </Col>
  );
}
