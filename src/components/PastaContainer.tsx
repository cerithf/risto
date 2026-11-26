interface Props {
  heading: string;
  subheading?: string;
  body: string;
  buttonText?: string;
  image?: string;
}

export default function PastaContainer({ text }: { text: Props }) {
  return (
    <div className="col-lg-4">
      <img src={text.image} width="120px" />
      <h2 className="fw-normal pt-3 font-kameron">{text.heading}</h2>
      <p>{text.body}</p>
      {text.buttonText && (
        <p>
          <a className="btn btn-secondary" href="#">
            {text.buttonText}
          </a>
        </p>
      )}
    </div>
  );
}
