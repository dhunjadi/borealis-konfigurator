import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);

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

  const PageContextValue = {
    page,
    setPage
  }

  return (
    <PageContext.Provider value={PageContextValue}>
      {children}
    </PageContext.Provider>
  );
};