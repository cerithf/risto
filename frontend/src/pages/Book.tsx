import Title from "../components/Title";
import BookForm from "../components/BookForm";

export default function Book() {
  return (
    <div className="BookPage">
      <div className="container d-flex flex-column align-items-center my-4">
        <Title>Book a Table!</Title>
        <BookForm includeLocation={true} />
      </div>
    </div>
  );
}
