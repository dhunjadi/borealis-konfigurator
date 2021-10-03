import React, { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";

export default function Total() {
  const {
    selected,
    total,
    setTotal,
    prevTotal,
    showCoupon,
    setShowCoupon,
    discount,
    discountInput,
    setDiscountInput,
  } = useContext(AnswersContext);
  const [inputValue, setInputValue] = useState("");
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    let totalPrice = selected.reduce((sum, curr) => {
      return sum + Number(curr);
    }, 0);
    setTotal(totalPrice);
  }, [selected, setTotal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "Tokić123") {
      setIncorrect(false);
      setCorrect(true);
      setDiscountInput(false);
      setTotal((prev) => (70 / 100) * prev);
    } else {
      setIncorrect(true);
    }
  };

  return (
    <div className="total-container">
      {correct && (
        <>
          {" "}
          <p className="success-msg">
            Hvala Vam! Unijeli ste ispravan kod kupona!
          </p>{" "}
          <p>OSNOVICA: {prevTotal} kn</p>{" "}
          <p>Popust (30%): {discount.toFixed(2)}</p>{" "}
        </>
      )}
      {incorrect && <p className="fail-msg">Neispravan kupon!</p>}
      {discountInput ? (
        <div className="discount-pair">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="primijeni-btn" onClick={handleSubmit}>
            Primijeni
          </button>
        </div>
      ) : null}
        {showCoupon &&<p onClick={() => {
          setDiscountInput(true)
          setShowCoupon(false)
          }}>Imam kupon</p>}
      
      UKUPNO : {total.toFixed(2)} kn
    </div>
  );
}
