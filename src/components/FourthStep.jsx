import React, { useContext, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { PageContext } from "../context/PageContext";
import pageList from "../pageList";
import SendMessage from "./SendMessage";

export default function FourthStep() {
  const { page, setPage } = useContext(PageContext);
  const {
    radio,
    name,
    tel,
    email,
    add,
    filteredSelected,
    discount,
    correct,
    discountedTotal,
    totalWithoutDiscount
  } = useContext(AnswersContext);
  const [showSendMessage, setShowSendMessage] = useState(false);

  const selected = filteredSelected.map((x) => {
    return (
      <div className="selected-pair">
        <div className="selected-title">{x.answer}</div>
        <div className="selected-price">{x.price} KN</div>
      </div>
    );
  });

  return (
    <div className="review-container">
      <div className="title-container">
        <h1>{pageList[page].text}</h1>
      </div>
      <div className="sub-title-container">
        <p>{pageList[page].subText}</p>
      </div>
      <div className="car-related-container">
        <div className="first-step-container">
          <div className="first-step-container-title">
            <h3>MODEL VOZILA</h3>
            <button className="edit-btn" onClick={() => setPage(0)}>
              UREDI
            </button>
          </div>
          <div className="first-step-container-content">
            <p>{radio}</p>
          </div>
        </div>
        <div className="second-step-container">
          <div className="second-step-container-title">
            <h3>ODABRANE USLUGE</h3>
            <button className="edit-btn" onClick={() => setPage(1)}>
              UREDI
            </button>
          </div>
          <div className="second-step-container-content">
            {selected}
            <div className="second-step-container-content-total">
              {correct && <p>Popust (30%) -{discount.toFixed(2)} KN</p>}{" "}
              UKUPNO : {correct ? discountedTotal.toFixed(2) : totalWithoutDiscount.toFixed(2)} kn
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info-container">
        <div className="third-step-container">
          <div className="third-step-container-title">
            <h3>KONTAKT PODACI</h3>
            <button className="edit-btn" onClick={() => setPage(2)}>
              UREDI
            </button>
          </div>
          <div className="third-step-container-content">
            <div className="name-email-continer">
              <div className="container-pair">
                <p>Ime i prezime: {name}</p>
              </div>
              <div className="container-pair">
                <p>Email adresa: {email}</p>
              </div>
            </div>
            <div className="tel-add-container">
              <div className="container-pair">
                <p>Broj telefona: {tel}</p>
              </div>
              <div className="container-pair">
                <p>Napomena: {add}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-container-btns">
        <button onClick={() => setPage((prev) => prev - 1)}>NAZAD</button>
        <button onClick={() => setShowSendMessage(true)}>POŠALJI</button>
      </div>

      {showSendMessage && (
        <SendMessage setShowSendMessage={setShowSendMessage} />
      )}
    </div>
  );
}
