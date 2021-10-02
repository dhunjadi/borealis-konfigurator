import React, { useContext, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { PageContext } from "../context/PageContext";
import pageList from "../pageList";
import SendMessage from "./SendMessage";

export default function FourthStep() {
  const { page, setPage } = useContext(PageContext);
  const { radio, name, tel, email, add } = useContext(AnswersContext);
  const [showSendMessage, setShowSendMessage] = useState(false)

  return (
    <>
      <div className="title-container">
        <h1>{pageList[page].text}</h1>
      </div>
      <div className="sub-title-container">
        <p>{pageList[page].subText}</p>
      </div>
      <div className="first-step-container">
        <div className="first-step-container-title">
          <h3>MODEL VOZILA</h3>
        </div>
        <div className="first-step-container-content">
          <p>{radio}</p> <button onClick={()=> setPage(0)}>UREDI</button>
        </div>
        <div className="second-step-container">
          <div className="second-step-container-title">
            <h3>ODABRANE USLUGE</h3> <button onClick={()=> setPage(1)}>UREDI</button>
          </div>
          <div className="second-step-container-content"></div>
        </div>
        <div className="third-step-container">
          <div className="third-step-container-title">
            <h3>KONTAKT PODACI</h3> <button onClick={()=> setPage(2)}>UREDI</button>
          </div>
          <div className="third-step-container-content">
              <div className="container-pair">
                  <p>Ime i prezime: {name}</p> 
              </div>
              <div className="container-pair">
                  <p>Email adresa: {email}</p> 
              </div>
              <div className="container-pair">
                  <p>Broj telefona: {tel}</p> 
              </div>
              <div className="container-pair">
                  <p> {add}</p> 
              </div>
          </div>
        </div>
      </div>
      <button onClick={()=> setShowSendMessage(true)}>POŠALJI</button>
      <button onClick={()=> setPage(prev => prev - 1)}>NAZAD</button>
      {showSendMessage && 
      <SendMessage 
      setShowSendMessage={setShowSendMessage}
      />
      }
    </>
  );
}
