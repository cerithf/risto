import "../styles/page_styles/landing.scss";
import { useViewport } from "../hooks/useViewport";
import { DEFAULT_BREAKPOINTS } from "../utils/constants";
import { useState } from "react";

function BigLink({
  path,
  title,
  subtitle,
}: {
  path: string;
  title: string;
  subtitle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <a
      href={path}
      onMouseEnter={() => {
        setTimeout(setIsOpen, 500, true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      className="big-link border-lightBlue text-cream fs-3 text-decoration-none p-2 d-flex flex-column justify-content-center"
    >
      <h2 className="font-coustard-black text-center lh-1 my-2">{title}</h2>
      {isOpen && (
        <p className="subtitle text-cream fs-6 text-center lh-sm">{subtitle}</p>
      )}
    </a>
  );
}

export default function Landing() {
  const links = {
    book: (
      <BigLink
        path="/book"
        title="Book a table"
        subtitle="The easiest way to let us know you're coming."
      />
    ),
    menu: (
      <BigLink
        path="/menu"
        title="Our Menu"
        subtitle="Let's face it – this is what you're here for."
      />
    ),
    locations: (
      <BigLink
        path="/locations"
        title="Locations"
        subtitle="See where you can find us (hint: we're all over)"
      />
    ),
    about: (
      <BigLink
        path="/about"
        title="About"
        subtitle="Find out about who we are and what we're about"
      />
    ),
    faq: <BigLink path="/faq" title="FAQS" subtitle="Whaddaya wanna know?" />,
    contact: (
      <BigLink path="/contact" title="Contact" subtitle="Get in touch!" />
    ),
  };
  const linkOrder: (keyof typeof links)[] = [
    "book",
    "menu",
    "locations",
    "about",
    "faq",
    "contact",
  ];

  // Shorthand
  const width = useViewport().width;
  const sm = DEFAULT_BREAKPOINTS.sm;
  const md = DEFAULT_BREAKPOINTS.md;

  return (
    <div className="LandingPage bg-blue px-6">
      <div className="row">
        <div className="col">
          <a href="/" className="text-decoration-none">
            <h1 className="landing-title text-cream font-coustard-black text-center">
              Risto
            </h1>
          </a>
          {width > sm ? (
            <>
              <div className="hero-gif-container tagliatelle raise">
                <img src="src/assets/gifs/tagliatelle.gif" />
              </div>
              {links["book"]}
              {links["menu"]}
            </>
          ) : (
            <>
              <div className="d-flex gap-3 small-view">
                <div className="hero-gif-container tagliatelle">
                  <img src="src/assets/gifs/tagliatelle.gif" />
                </div>
                <div className="hero-gif-container pizza">
                  <img src="src/assets/gifs/pizza.gif" />
                </div>
                <div className="hero-gif-container spaghetti">
                  <img src="src/assets/gifs/spaghetti.gif" />
                </div>
              </div>
              <div className="d-grid small-view mb-4 pb-4">
                {linkOrder.map((item) => links[item])}
              </div>
            </>
          )}
        </div>
        <div className="col d-none d-sm-flex">
          {links["locations"]}
          {links["about"]}
          {width < md && links["faq"]}
          <div
            className={"hero-gif-container pizza" + (width < md && " raise")}
          >
            <img src="src/assets/gifs/pizza.gif" />
          </div>
          {width < md && links["contact"]}
        </div>
        <div className="col d-none d-md-flex">
          <div className="hero-gif-container spaghetti">
            <img src="src/assets/gifs/spaghetti.gif" />
          </div>
          {links["faq"]}
          {links["contact"]}
        </div>
      </div>
    </div>
  );
}
