import React, { useState, useContext, useEffect } from "react";
import { AnswersContext } from "../context/AnswersContext";

export default function AnswerMulti({ answer }) {
  const [isChecked, setIsChecked] = useState(false);
  const { selected, setSelected } = useContext(AnswersContext);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    if (isChecked && !selected.find((x) => x !== e.target.value)) {
      setSelected([...selected, e.target.value]);
    }
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="pair">
      <div className="input-container">
        <input
          type="checkbox"
          id={answer.id}
          defaultChecked={isChecked}
          value={answer.price}
          onChange={handleChange}
        />
      </div>
      <div className="text-container">
        {answer.answer} ({answer.price} kn)
      </div>
    </div>
  );
}
