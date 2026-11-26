import Title from "../components/Title";
import "../styles/page_styles/about.scss";

export default function About() {
  return (
    <div className="AboutPage">
      <Title>About</Title>
      <div className="timeline-container container">
        <div className="line" />
        <div className="timeline">
          <div className="timeline-item">
            <h3 className="font-coustard">1987</h3>
            <img
              className="right-tilt d-none d-md-block"
              src="src/assets/timeline/giovanni_and_maria.jpg"
            />
            <p className="">
              Giovanni and Maria Conti leave their small vineyard in Tuscany and
              settle in London, bringing with them a suitcase of family recipes
              and a dream of opening their own trattoria.
            </p>
            <img
              className="right-tilt d-block d-md-none"
              src="src/assets/timeline/giovanni_and_maria.jpg"
            />
          </div>
          <div className="timeline-item raise">
            <h3 className="font-coustard">1989</h3>
            <p>
              Risto opens its doors for the first time as a modest 20-seat
              restaurant on a quiet back&shy;street in Clerken&shy;well, serving
              handmade pasta to a handful of curious regulars.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="font-coustard">1992</h3>
            <p>
              Word spreads quickly, and Risto expands into the unit next door,
              doubling its seating and introducing a wood-fired oven for
              authentic Neapolitan-style pizza.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="font-coustard">2001</h3>
            <img
              className="left-tilt d-none d-md-block"
              src="src/assets/timeline/marco_chef.jpg"
            />
            <p>
              The Conti family's son, Marco, takes over as head chef, blending
              his classical training in Bologna with his parents' traditional
              recipes to refresh the menu.
            </p>
            <img
              className="left-tilt d-block d-md-none"
              src="src/assets/timeline/marco_chef.jpg"
            />
          </div>
          <div className="timeline-item">
            <h3 className="font-coustard">2003</h3>
            <p>
              Risto is named "Best Neighbourhood Restaurant" by a leading London
              food guide, cementing its reputation as a beloved local
              institution.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="font-coustard">2007</h3>
            <p>
              A second Risto location opens in Manchester, bringing the same
              warmth and family recipes to a new city while staying true to its
              roots.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="font-coustard">2012</h3>
            <p>
              Risto expands further and now has restaurants in fifteen different
              cities across England.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="font-coustard">2019</h3>
            <p>
              Just in time for its 30th anniversary, Risto opens its 30th
              location and can be found in all four UK nations.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="font-coustard">2026</h3>
            <p>
              Now run by the third generation of the Conti family, Risto
              continues to serve the same recipes that started it all, welcoming
              a new generation of diners through its doors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
