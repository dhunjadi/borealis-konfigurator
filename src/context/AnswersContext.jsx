import { createContext, useState } from "react";
import pageList from "../pageList";

export const AnswersContext = createContext();

export const AnswersContextProvider = ({ children }) => {
  // First step
  const [radio, setRadio] = useState("");
  //Second step
  const [selected, setSelected] = useState([]);
  // Second step - Total
  const [totalWithoutDiscount, setTotalWithoutDiscount] = useState(0);
  const [base, setBase] = useState(0);
  const [showCoupon, setShowCoupon] = useState(true);
  const [couponInput, setCouponInput] = useState(false);
  const [correct, setCorrect] = useState(false);
  //Third step
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [add, setAdd] = useState("");


  // Korak 2 - računanje ukupnog iznosa sa popustom
  const discount = base * 0.3; // Popust
  const discountedTotal = base - discount; // Osnovica - popust

 // Prikaz odabranih usluga iz drugog koraka u koraku 4
  let filteredSelected = [];
  for (let i = 0; i < selected.length; i++) {
    filteredSelected = [
      ...filteredSelected,
      ...pageList[1].answers.filter((ans) => ans.price === selected[i]),
    ];
  }

  const AnsersContextValue = {
    radio,
    setRadio,
    selected,
    setSelected,
    totalWithoutDiscount,
    setTotalWithoutDiscount,
    name,
    setName,
    tel,
    setTel,
    email,
    setEmail,
    add,
    setAdd,
    showCoupon,
    setShowCoupon,
    discount,
    couponInput,
    setCouponInput,
    base,
    setBase,
    discountedTotal,
    correct,
    setCorrect,
    filteredSelected
  };

  return (
    <AnswersContext.Provider value={AnsersContextValue}>
      {children}
    </AnswersContext.Provider>
  );
};
