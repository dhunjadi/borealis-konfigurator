import React, { useContext, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { PageContext } from "../context/PageContext";
import pageList from "../pageList";
import { v4 as uuidv4 } from "uuid";

export default function FirstStep() {
  const { page, setPage } = useContext(PageContext);
  const { radio, setRadio } = useContext(AnswersContext);
  const [ error, setError ] = useState(false)

  // Inputi
  const inputs = pageList[page].answers.map((ans) => {
    return (
      <div key={uuidv4()} className="input-pair">
        <div className="input-container">
          <input
            type="radio"
            id={ans.answer}
            checked={radio === ans.answer}
            value={ans.answer}
            onChange={(e) => setRadio(e.target.value)}
          />
        </div>
        <div className="label-container">
          <label htmlFor={ans.answer}>{ans.answer}</label>
        </div>
      </div>
    );
  });

  // Sljedeći korak
  const handleNext = () => {
    if (radio) {
      setPage((prev) => prev + 1);
    } else {
      setError(true)
    }
  };

  return (
    <div className='first-step-container'>
      <div className="title-container">
        <h1>{pageList[page].text}</h1>
      </div>
      <div className="inputs">{inputs}</div>
      {error && <p className='error-msg'>Odaberite Proizvođača</p>}
      <div className="btn-container">
        <button className="next-btn" onClick={handleNext}>
          Dalje
        </button>
      </div>
    </div>
  );
}
