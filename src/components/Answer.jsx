import React, { useState, useContext, useEffect } from "react";
import { AnswersContext } from "../context/AnswersContext";

export default function Answer({ answer }) {
  const [isChecked, setIsChecked] = useState(false);
  const { selected, setSelected } = useContext(AnswersContext);

 const handleChange = (e) => {
   setIsChecked(e.target.checked)
   if(isChecked){
    setSelected([...selected, e.target.value])
   }
 }

 useEffect(()=> {
   console.log(selected)
 }, [selected])

  return (
    <div className="pair">
      <input
        type="checkbox"
        id={answer.id}
        defaultChecked={isChecked}
        value={answer.price}
        onChange={handleChange}
      />
      {answer.answer} ({answer.price} kn)
    </div>
  );
}
