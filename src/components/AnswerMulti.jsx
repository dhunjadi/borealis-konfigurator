import React, { useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";

export default function AnswerMulti({ answer }) {

  const { selected, setSelected } = useContext(AnswersContext);

  const handleChange = (event) => {
    const { checked, value } = event.currentTarget;

    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };

  return (
    <div key={answer.id}>
    <label htmlFor={answer.id}>{answer.answer}</label>
    <input 
      id={answer.id}
      value={answer.price}
      type="checkbox" 
      checked={selected.some(val => val === answer.price)}
      onChange={handleChange} 
    />
  </div>
  )
  
  
}
