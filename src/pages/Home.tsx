import Carousel from "../components/Carousel";
import Feauturette from "../components/Featurette";
import PastaContainer from "../components/PastaContainer";
import Offer from "../components/Offer";
import GifHero from "../components/GifHero";
import { Container, Row } from "react-bootstrap";
import "../styles/page_styles/home.scss";
// images
import TileImg from "../assets/tile.png";
import Pasta1Img from "../assets/pasta/pasta-1.png";
import Pasta2Img from "../assets/pasta/pasta-2.png";
import Pasta3Img from "../assets/pasta/pasta-3.png";
import CdfImg from "../assets/stock-images/cdf.png";

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="text-center font-kameron fw-bold display-4 text-red mb-4">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="HomePage">
      {/* <GifHero /> */}
      <div
        className="benvenuto-hero px-4 py-lg-5 text-center position-relative overflow-hidden d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "500px",
          zIndex: "-1",
        }}
      >
        <div className="hero-title d-flex flex-column align-items-center">
          <h1 className="display-1 z-1 font-kameron text-red fw-bold p-3">
            Benvenuto al Risto
          </h1>
          <p className="lead mb-4 text-red">
            Dove il cibo e la vita sono dolci
          </p>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center align-self-center">
          <button type="button" className="btn btn-blue btn-lg px-4 gap-3">
            Book a table
          </button>
          <button type="button" className="btn btn-lg px-4 bg-white text-blue">
            See our menu
          </button>
        </div>
        <img src={TileImg} className="tile-img shadow-md shadow scale-50 " />
        <img src={TileImg} className="tile-img tile-img-2 shadow" />
      </div>
      <Carousel />
      <Container className="thin-content">
        <SectionHeading>Some of our favourites</SectionHeading>
        <Row>
          <PastaContainer
            text={{
              heading: "Mafalde con Ragù",
              body: "Something about beef and the pasta oh it's so good.",
              image: Pasta1Img,
            }}
          />
          <PastaContainer
            text={{
              heading: "Spaghetti Carbonara",
              body: "A taste of Italy that's become a British classic. We could twist it 'round our fork for hours.",
              image: Pasta2Img,
            }}
          />
          <PastaContainer
            text={{
              heading: "Fusilli all'Arrabbiata ",
              body: "A simple, vegetarian classic that we come back to time and time again, especially on warmer days.",
              image: Pasta3Img,
            }}
          />
        </Row>
        <hr className="divider" />
        <SectionHeading>Latest Offers</SectionHeading>
        <Row className="thin-content">
          <Offer image="feed-4">Feed 4 for £40</Offer>
          <Offer image="dessert">
            Free dessert when <br className="d-none d-xl-block" />
            you spend £25
          </Offer>
          <Offer image="pizza">BOGOF pizzas on Tuesdays</Offer>
        </Row>
        <hr className="divider" />
        <SectionHeading>News</SectionHeading>
        <Feauturette
          text={{
            heading: "Croeso i Italia",
            subheading: "We're expanding!",
            body: "We're happy to announce our newest location opened this May in Cardiff's Wyndham Arcade.",
            image: CdfImg,
          }}
        />
        <Feauturette
          text={{
            heading: "Oh yeah, it’s that good.",
            subheading: "See for yourself.",
            body: "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.",
          }}
          reverse={true}
        />
        <Feauturette
          text={{
            heading: "And lastly, this one.",
            subheading: "Checkmate.",
            body: "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.",
          }}
        />
        <hr className="divider" />
      </Container>
    </div>
  );
}
