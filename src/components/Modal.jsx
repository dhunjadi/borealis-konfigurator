import React, { useContext } from "react";
import pageList from "../pageList";
import { PageContext } from "../context/PageContext";
import SecondStep from "./SecondStep";
import FirstStep from "./FirstStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";


export default function Modal({ setShowModal }) {
  const { page } = useContext(PageContext);

  return (
    <div className="modal">
      <div className="x-btn">
        <button className='x-btn' onClick={() => setShowModal(false)}>&times;</button>
      </div>
      <div className="modal-title">
        <h1>Konfigurator servisa</h1>
      </div>
      <div className="answers-container"></div>
      {pageList[page].step === "1" && <FirstStep />}
      {pageList[page].step === "2" && <SecondStep />}
      {pageList[page].step === "3" && <ThirdStep />}
      {pageList[page].step === "4" && <FourthStep />}
    </div>
  );
}
