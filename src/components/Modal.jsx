import React, { useContext, useState } from "react";
import questionList from "../questionList";
import { QuestionContext } from "../context/QuestionContext";
import { AnswersContext } from "../context/AnswersContext";
import { v4 as uuidv4 } from "uuid";
import Answer from "./Answer";
import Total from "./Total";

export default function Modal({ setShowModal }) {
  const { displayQuestion, setDisplayQuestion } = useContext(QuestionContext);
  const { answers, setAnswers } = useContext(AnswersContext);
  const [radio, setRadio] = useState();

  const singleChoiceAnswers = questionList[displayQuestion].answers.map(
    (choice) => {
      return (
        <div key={uuidv4()} className="pair">
          <input
            type="radio"
            checked={radio === choice.answer}
            value={choice.answer}
            onChange={(e) => setRadio(e.target.value)}
          />
          {choice.answer}
        </div>
      );
    }
  );

  const multipleChoiceAnswers = questionList[displayQuestion].answers.map(
    (answer) => {
      return <Answer key={uuidv4()} answer={answer} />;
    }
  );

  const handleNext = () => {
    if (radio) {
      setDisplayQuestion((prev) => prev + 1);
      setAnswers([...answers, radio]);
      console.log(answers);
    }
  };

  return (
    <div className="modal">
      <div className="x-btn">
        <button onClick={() => setShowModal(false)}>&times;</button>
      </div>
      <div className="modal-title">
        <h1>Konfigurator servisa</h1>
      </div>
      <h1>{questionList[displayQuestion].text}</h1>
      <div className="answers-container"></div>
      {questionList[displayQuestion].multipleChoice === false
        ? singleChoiceAnswers
        : multipleChoiceAnswers}
      <div className="next-btn">
        {displayQuestion > 0 && (
          <button onClick={() => setDisplayQuestion((prev) => prev - 1)}>
            Nazad
          </button>
        )}
        <button onClick={handleNext}>Dalje</button>
      </div>
      {displayQuestion === 1 && <Total />}
    </div>
  );
}
