import "../styles/component_styles/hero.scss";

export default function GifHero() {
  return (
    <div className="gif-hero gap-1 gap-sm-3 bg-teal p-3 d-flex w-100">
      <div className="hero-gif-container">
        <div className="yellow-filter" />
        <img src="src/assets/gifs/tagliatelle.gif" className="hero-gif" />
      </div>
      <div className="hero-gif-container bl">
        <img src="src/assets/gifs/pizza.gif" className="hero-gif" />
      </div>
      <div className="hero-gif-container bl">
        <img src="src/assets/gifs/spaghetti.gif" className="hero-gif" />
      </div>
    </div>
  );
}
