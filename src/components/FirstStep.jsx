import React, { useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";

export default function FirstStep({ answer }) {
  const { radio, setRadio } = useContext(AnswersContext);
  return (
    <div className="pair">
      <div className="input-container">
        <input
          type="radio"
          checked={radio === answer.answer}
          value={answer.answer}
          onChange={(e) => setRadio(e.target.value)}
        />
      </div>
      <div className="text-container">
        <p>{answer.answer}</p>
      </div>
    </div>
  );
}
