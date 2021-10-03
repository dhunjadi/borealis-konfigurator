import React, { useContext, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { PageContext } from "../context/PageContext";
import pageList from "../pageList";

export default function ThirdStep() {
  const { page, setPage } = useContext(PageContext);
  const { name, setName, tel, setTel, email, setEmail, add, setAdd } =
    useContext(AnswersContext);
    const [ error, setError ] = useState(false)

    const handleNext = () => {
      if (name.length !== 0 && email.length !== 0 && tel.length !== 0) {
        setPage((prev) => prev + 1);
      }

      if (name.length === 0 || email.length === 0 || tel.length === 0) {
        setError(!error)
      }
    };
  
    const handleBack = () => {
      setPage((prev) => prev - 1);
    };

  return (
    <div className='third-step-container'>
      <div className="title-container">
        <h1>{pageList[page].text}</h1>
      </div>
      <div className='input-container'>
        <input type="text" name="name" placeholder="Ime i prezime*" value={name} required onChange={(e)=> setName(e.target.value)}/>
        <input type="email" name="email" placeholder="Email adresa*" value={email} required onChange={(e)=> setEmail(e.target.value)}/>
        <input type="tel" name="tel" placeholder="Broj telefona*" value={tel} required onChange={(e)=> setTel(e.target.value)}/>
        <textarea name="add" placeholder="Napomena (opcionalno)" value={add} onChange={(e)=> setAdd(e.target.value)}/>
        {error && <p className='error-msg'>Polja označena sa * su obavezna</p> }
      </div>
      <div className="btns-container">
        <button className="back-btn" onClick={handleBack}>Nazad</button>
        <button className="next-btn" onClick={handleNext}>Dalje</button>
      </div>
    </div>
  );
}
