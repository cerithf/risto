import Title from "../components/Title";
import { Container } from "react-bootstrap";
import BookForm from "../components/BookForm";

export default function Book() {
  return (
    <div className="BookPage">
      <Container>
        <Title>Book a Table!</Title>
        <BookForm includeLocation={true} />
      </Container>
    </div>
  );
}
