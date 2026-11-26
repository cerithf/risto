import { useState } from "react";

export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="question card text-bg-blue p-0"
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <div className="d-flex ">
        <span className="text-white my-auto fs-5 p-0 m-3">
          <i
            className={
              "bi bi-caret-right-fill question-caret" +
              (isOpen ? " rotated" : "")
            }
          />
        </span>
        <h4 className="font-coustard mt-2">{question}</h4>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <hr className="mt-1 mb-2" />
          <p className="px-5">{answer}</p>
        </div>
      </div>
    </div>
  );
}
