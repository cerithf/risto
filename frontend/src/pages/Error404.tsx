import Title from "../components/Title";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <div className="Error404Page">
      <Container>
        <Title>Error 404</Title>
        <h2 className="text-center text-red font-coustard m-0 p-0">
          Page Not Found
        </h2>
        <p className="text-center fw-bold">Try again</p>
      </Container>
    </div>
  );
}
