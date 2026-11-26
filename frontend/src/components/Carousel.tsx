import "../styles/component_styles/carousel.scss";
import { Carousel, Form } from "react-bootstrap";
import { useState } from "react";
import GroupImg from "../assets/stock-images/group.avif";
import DiscoverImg from "../assets/stock-images/discover.jpg";
import BeachImg from "../assets/stock-images/beach.jpg";
import ChefImg from "../assets/stock-images/chef.png";

export default function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={GroupImg}
          style={{
            height: "130%",
            width: "100%",
            objectFit: "cover",
          }}
          className="opacity-80"
        />
        <div
          style={{ border: "solid 3px purple !important" }}
          className="w-100 px-9"
        >
          <Carousel.Caption className="bg-blue px-3 rounded-4">
            <h1 className="text-white font-kameron">
              Every piece o' pizza pays
            </h1>
            <p>
              Join our RistoRewards programme for the best deals this side of
              the Alps.
            </p>
            <button className="btn bg-white text-primary">
              Give me points!
            </button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={DiscoverImg}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          className="opacity-80"
        />
        <Carousel.Caption
          className="bg-blue px-5 rounded-4"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="text-white font-kameron">Find your Risto</h1>
          <p>We're all over!</p>
          <Form.Control type="text" placeholder="Search your city here" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={BeachImg}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          className="opacity-80"
        />

        <Carousel.Caption className="bg-blue px-3 rounded-4">
          <h1 className="text-white font-kameron">L'estate è arrivata</h1>
          <p>The sun's out – and so are the cocktails.</p>
          <button className="btn bg-white text-primary">
            See our summer menu
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="bg-blue">
        <div className="d-flex w-100 h-100 border-2 border-black justify-content-end align-items-end">
          <Carousel.Caption className="bg-blue px-3 rounded-4">
            <h1 className="text-white font-kameron">Our Ristory</h1>
            <p>
              We always try to stick to our roots. Learn more about the company
              behind Italy's best exports.
            </p>
            <button className="btn bg-white text-primary">Learn more</button>
          </Carousel.Caption>
          <img
            src={ChefImg}
            style={{ height: "100%" }}
            className="opacity-80"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
