interface Props {
  heading: string;
  subheading?: string;
  body: string;
  image?: string;
}

export default function Feauturette({
  text,
  reverse,
}: {
  text: Props;
  reverse?: boolean;
}) {
  return (
    <div
      className={
        "d-flex p-3 row my-3 bg-blue text-white featurette align-items-stretch " +
        (reverse && " flex-row-reverse")
      }
    >
      <div className="col-md-7 h-100 align-self-end">
        <h2 className="featurette-heading fw-normal lh-1 font-kameron fw-bold">
          {text.heading}
        </h2>
        <h3 className="fw-light font-kameron">{text.subheading}</h3>
        <p className="lead">{text.body}</p>
        <a href="#" className="text-white">
          Read more
        </a>
      </div>
      <div className="align-self-stretch col-md-5 p-0 mt-4 mt-md-0 overflow-hidden">
        <img src={text.image} className="w-100" />
      </div>
    </div>
  );
}
