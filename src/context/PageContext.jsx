import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);

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