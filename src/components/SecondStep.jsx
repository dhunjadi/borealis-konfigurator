import React, { useContext, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { PageContext } from "../context/PageContext";
import pageList from "../pageList";
import { v4 as uuidv4 } from "uuid";
import Total from "./Total";

export default function SecondStep() {
  const { page, setPage } = useContext(PageContext); 
  const { selected, setSelected } = useContext(AnswersContext); // Odabrane usluge
  const [ error, setError ] = useState(false) // State u slučaju da se nijedna usluga nie odabrala

  // Odabir
  const handleChange = (event) => {
    const { checked, value } = event.currentTarget;

    // Provjera je li kliknuti usluga odabrana i odabire ju ako nije
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };

  // Sljedeći korak
  const handleNext = () => {
    if (selected.length !== 0) {
      setPage((prev) => prev + 1);
    } else{
      setError(true)
    }
  };

  // Prethodni korak
  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  const inputs = pageList[page].answers.map((ans) => {
    return (
      <div key={uuidv4()} className="input-pair">
        <div className="input-container">
          <input
            type="checkbox"
            id={ans.answer}
            value={ans.price}
            checked={selected.some((val) => val === ans.price)}
            onChange={handleChange}
          />
        </div>
        <div className="label-container">
          <label htmlFor={ans.answer}>{ans.answer}</label>
        </div>
      </div>
    );
  });

  return (
    <div className='second-step-container'>
      <div className="title-container">
        <h1>{pageList[page].text}</h1>
      </div>
      <div className="inputs">{inputs}</div>
      <Total />
      {error && <p className='error-msg'>Obavezan odabir barem jedne usluge</p>}
      <div className="btns-container">
        <button className="back-btn" onClick={handleBack}>
          Nazad
        </button>
        <button className="next-btn" onClick={handleNext}>
          Dalje
        </button>
      </div>
    </div>
  );
}
