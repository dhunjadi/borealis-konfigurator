import React, { useContext } from "react";
import questionList from "../questionList";
import { QuestionContext } from "../context/QuestionContext";
import { AnswersContext } from "../context/AnswersContext";
import { v4 as uuidv4 } from "uuid";
import SecondStep from "./SecondStep";
import Total from "./Total";
import FirstStep from "./FirstStep";
import ThirdStep from "./ThirdStep";


export default function Modal({ setShowModal }) {
  const { displayQuestion, setDisplayQuestion } = useContext(QuestionContext);
  const { radio } = useContext(AnswersContext);

  const firstStep = questionList[displayQuestion].answers.map(
    (answer) => {
      return <FirstStep key={uuidv4()} answer={answer} />;
    }
  );

  const secondStep = questionList[displayQuestion].answers.map(
    (answer) => {
      return <SecondStep key={uuidv4()} answer={answer} />;
    }
  );

  const thirdStep = questionList[displayQuestion].answers.map(
    (answer) => {
      return <ThirdStep key={uuidv4()} answer={answer} />;
    }
  );
  

  const handleNext = () => {
    if (radio) {
      setDisplayQuestion((prev) => prev + 1);
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
      {questionList[displayQuestion].answerType === "singlechoice" && firstStep}
      {questionList[displayQuestion].answerType === "multiplechoice" && secondStep}
      {questionList[displayQuestion].answerType === "text" && thirdStep}
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
