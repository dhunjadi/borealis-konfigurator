import { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
  const [displayQuestion, setDisplayQuestion] = useState(0);

/* // Spremanje rednog broja pitanja iz local storage-a u state 
  useEffect(() => {
    const data = localStorage.getItem("my-questions");
    if (data) {
      setDisplayQuestion(JSON.parse(data)); // Spremanje vrijednosti u state
    }
  }, []);

// Spremanje rednog broja pitanja u local storage
  useEffect(() => {
    localStorage.setItem("my-questions", JSON.stringify(displayQuestion)); //Izrada Key-a
  }); */

  const QuestionContextValue = {
    displayQuestion,
    setDisplayQuestion
  }

  return (
    <QuestionContext.Provider value={QuestionContextValue}>
      {children}
    </QuestionContext.Provider>
  );
};