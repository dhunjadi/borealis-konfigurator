import React, { useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { PageContext } from "../context/PageContext";
import pageList from "../pageList";
import { v4 as uuidv4 } from "uuid";

export default function FirstStep() {
  const { page, setPage } = useContext(PageContext);
  const { radio, setRadio } = useContext(AnswersContext);

  const inputs = pageList[page].answers.map((ans) => {
    return (
      <div key={uuidv4()} className="pair">
        <div className="input-container">
          <input
            type="radio"
            checked={radio === ans.answer}
            value={ans.answer}
            onChange={(e) => setRadio(e.target.value)}
          />
        </div>
        <div className="text-container">
          <label>{ans.answer}</label>
        </div>
      </div>
    );
  });

  const handleNext = () => {
    if (radio) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className='first-step-container'>
      <div className="title-container">
        <h1>{pageList[page].text}</h1>
      </div>
      <div className="inputs">{inputs}</div>
      <div className="btn-container">
        <button className="next-btn" onClick={handleNext}>
          Dalje
        </button>
      </div>
    </div>
  );
}
