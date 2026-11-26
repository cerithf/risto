import Title from "../components/Title";
import "../styles/page_styles/contact.scss";

export default function Contact() {
  return (
    <div className="ContactPage">
      <Title>Contact</Title>
      <div className="container pt-0 mt-0">
        <form
          className="bg-blue text-white p-4 mx-4 mb-4 rounded-3"
          action={() => alert("hi")}
          method="get"
        >
          <h2 className="font-coustard text-center fw-bold">Get in touch!</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              aria-describedby="helpId"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelpId"
              placeholder="your-email@mail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-yellow text-darkBlue font-coustard"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
