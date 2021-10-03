import React, { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";

export default function Total() {
  const {
    selected, // Odabrane usluge spremaju se u context
    totalWithoutDiscount, // Ukupan iznos bez popusta
    setTotalWithoutDiscount,
    showCoupon, // State za prikaz "Imam kupon"
    setShowCoupon, // u zadnjem koraku o njemu ovisi kako će izgledati pregled
    discount, // Iznos popusta
    couponInput, // State za unos kupona
    setCouponInput,
    base, // Osnovica u slučaju ispravnog kupona
    setBase,
    discountedTotal, // Ukupan iznos sa popustom
    correct, // State za prikaz poruke kod unosa ispravnog kupona
    setCorrect
  } = useContext(AnswersContext);
  const [inputValue, setInputValue] = useState(""); // State unos kupona
  const [incorrect, setIncorrect] = useState(false); //State za neispravan unos kupona

  // Računanje ukupnog iznosa bez popusta

  // Ukupni iznos se stavlja u dva state-a pa se kasnije,
  // ovisno je li upisan ispravn kupon, prikazuje ukupan iznos bez popusta
  // ili se prikazuje drugi kao osnovica za popust
  useEffect(() => {
    let totalPrice = selected.reduce((sum, curr) => {
      return sum + Number(curr);
    }, 0);
    setTotalWithoutDiscount(totalPrice);
    setBase(totalPrice)
  }, [selected, setTotalWithoutDiscount, setBase]);

  // Submit kupona
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "Tokić123") {
      setIncorrect(false);
      setCorrect(true);
      setCouponInput(false);
      setShowCoupon(false)
      setTotalWithoutDiscount((prev) => (70 / 100) * prev);
    } else {
      setIncorrect(true);
    }
  };

  return (
    <div className="total-container">
      {correct && (
        <>
          <p className="success-msg">
            Hvala Vam! Unijeli ste ispravan kod kupona!
          </p>
          <p>OSNOVICA: {base} kn</p>
          <p>Popust (30%): {discount.toFixed(2)}</p>
        </>
      )}
      {incorrect && <p className="error-msg">Neispravan kupon!</p>}
      {couponInput ? (
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
        {showCoupon &&<p className='coupon-link' onClick={() => {
          setCouponInput(true)
          setShowCoupon(false)
          }}>Imam kupon</p>}
      
      UKUPNO : {correct ? discountedTotal.toFixed(2) : totalWithoutDiscount.toFixed(2)} kn
    </div>
  );
}
