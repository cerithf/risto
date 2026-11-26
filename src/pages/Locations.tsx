import Title from "../components/Title";
import MapBG from "../assets/stock-images/map-bg.jpg";
import Hero from "../components/Hero";
import LocationItem from "../components/LocationItem";
import { Container } from "react-bootstrap";
import LocationData from "../data/location_data.json";
import { useState } from "react";

export default function Locations() {
  const locations = [...LocationData].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const countries = ["All", "England", "Wales", "Scotland", "N. Ireland"];
  const [activeTab, setActiveTab] = useState(0);

  function LocationResults() {
    if (activeTab == 0) {
      return (
        <>
          <h2 className="text-center text-red font-coustard">
            All restaurants ({locations.length})
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-3">
            {locations.map((place, index) => (
              <LocationItem data={place} key={index} />
            ))}
          </div>
        </>
      );
    } else {
      const filteredLocations = locations.filter(
        (place) => place.country == countries[activeTab],
      );
      return (
        <>
          <h2 className="text-center text-red font-coustard">
            Our restaurants in {countries[activeTab]} (
            {filteredLocations.length})
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-3">
            {filteredLocations.map((place, index) => (
              <LocationItem data={place} key={index} />
            ))}
          </div>
        </>
      );
    }
  }

  return (
    <div className="LocationsPage">
      <Hero image={MapBG} customOpacity={0.35}>
        <Title>Our Locations</Title>
        <div className=" mx-auto">
          <p className="lead mb-4" style={{ textShadow: "0px 0px 10px white" }}>
            We've got restaurants all over the UK so we're sure to be close by –{" "}
            <br className="d-none d-md-block" />
            wherever you are.
          </p>
        </div>
        <div className="bg-blue p-3 rounded-2">
          <ul className="d-flex flex-wrap justify-content-center align-items-center gap-3 p-0 mb-0">
            {countries.map((country, index) => (
              <li
                key={index}
                className={
                  "text-center font-coustard py-1 px-3 rounded-2 px-0 list-unstyled category-item flex-1 cursor-pointer z-2" +
                  " " +
                  (activeTab == index ? "bg-lightBlue" : "bg-yellow")
                }
                style={{ maxWidth: "120px", minWidth: "100px" }}
                onClick={() => setActiveTab(index)}
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
      </Hero>
      <Container>
        <div className="alert alert-secondary mt-3 pb-0 d-flex" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2" />
          <p>
            Careful: the following is all dummy data. Please do not try to call
            any of the phone numbers below.
          </p>
        </div>
        <LocationResults />
      </Container>
    </div>
  );
}
