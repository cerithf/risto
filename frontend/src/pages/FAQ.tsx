import Title from "../components/Title";
import Question from "../components/Question";
import FAQData from "../data/faq.json";
import "../styles/component_styles/question.scss";
import "../styles/page_styles/faq.scss";

export default function FAQ() {
  return (
    <div className="FAQPage">
      <Title>FAQs</Title>
      <div className="container d-grid px-3">
        {FAQData.map((item) => {
          return <Question question={item[0]} answer={item[1]} />;
        })}
      </div>
    </div>
  );
}
