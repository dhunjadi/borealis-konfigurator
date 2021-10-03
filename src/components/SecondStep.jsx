import React, { useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { PageContext } from "../context/PageContext";
import pageList from "../pageList";
import { v4 as uuidv4 } from "uuid";
import Total from "./Total";

export default function SecondStep() {
  const { page, setPage } = useContext(PageContext);
  const { selected, setSelected, showCoupon, setShowCoupon, setDiscountInput } = useContext(AnswersContext);

  const handleChange = (event) => {
    const { checked, value } = event.currentTarget;
    setShowCoupon(true)
    if(!showCoupon){
      setDiscountInput(true)
    }
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };

  const handleNext = () => {
    if (selected.length !== 0) {
      setPage((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  const inputs = pageList[page].answers.map((ans) => {
    return (
      <div key={uuidv4()} className="pair">
        <div className="input-container">
          <input
            type="checkbox"
            value={ans.price}
            checked={selected.some((val) => val === ans.price)}
            onChange={handleChange}
          />
        </div>
        <div className="text-container">
          <label htmlFor={ans.id}>{ans.answer}</label>
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
