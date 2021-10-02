import React, { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../context/AnswersContext";
import { QuestionContext } from "../context/QuestionContext";
import questionList from "../questionList";

export default function Total() {
  const { selected, total, setTotal, prevTotal } = useContext(AnswersContext);
  const { displayQuestion } = useContext(QuestionContext);
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
 



  useEffect(() => {
    let totalPrice = selected.reduce((sum, curr) => {
      return sum + Number(curr);
    }, 0);
    setTotal(totalPrice);
    setCorrect(false)
  }, [selected, setTotal]);

  let found = [];
  for (let i = 0; i < selected.length; i++) {
    found = [
      ...found,
      ...questionList[displayQuestion].answers.filter(
        (ans) => ans.price === selected[i]
      ),
    ];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "Tokić123") {
      setIncorrect(false);
      setCorrect(true);
      setClicked(false);
      setTotal((prev) => (70 / 100) * prev);
    } else {
      setIncorrect(true);
    }
  };

  return (
    <div>
      {correct && <> <p>Hvala Vam! Unijeli ste ispravan kod kupona!</p> <p>OSNOVICA: {prevTotal}</p> <p>Popust (30%): {(prevTotal * 0.3).toFixed(2)}</p> </>}
      {incorrect && <p>Neispravan kupon!</p>}
      {clicked ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSubmit}>Primijeni</button>
        </>
      ) : (
        <p onClick={() => setClicked(true)}>Imam kupon</p>
      )}
      UKUPNO : {total.toFixed(2)} kn
    </div>
  );
}
