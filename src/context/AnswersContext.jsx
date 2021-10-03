import { createContext, useState } from "react";
import pageList from "../pageList";

export const AnswersContext = createContext();

export const AnswersContextProvider = ({ children }) => {
  // First step
  const [radio, setRadio] = useState("");
  //Second step
  const [selected, setSelected] = useState([]);
  const [foundCopy, setFoundCopy] = useState([]);
  // Second step - total
  const [totalWithoutDiscount, setTotalWithoutDiscount] = useState(0);
  const [base, setBase] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [showCoupon, setShowCoupon] = useState(true);
  const [discountInput, setDiscountInput] = useState(false);
  const [correct, setCorrect] = useState(false);
  //Third step
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [add, setAdd] = useState("");


  let filteredSelected = [];
  for (let i = 0; i < selected.length; i++) {
    filteredSelected = [
      ...filteredSelected,
      ...pageList[1].answers.filter((ans) => ans.price === selected[i]),
    ];
  }

  // Korak 2 - računanje ukupnog iznosa sa popustom
  const discount = base * 0.3; // Popust
  const discountedTotal = base - discount; // Osnovica - popust

  /*     // Spremanje odgovora iz local storage-a u state

    useEffect(() => {
        const data = localStorage.getItem('my-answers') // Spremanje vrijednosti u state
        if(data) {
            setAnswers(JSON.parse(data))
        }
    }, [])

    // Spremanje odgovora u local storage

    useEffect(()=>{
        localStorage.setItem('my-answers', JSON.stringify(answers)) //Izrada Key-a
    }) */

  const AnsersContextValue = {
    radio,
    setRadio,
    selected,
    setSelected,
    foundCopy,
    setFoundCopy,
    totalWithoutDiscount,
    setTotalWithoutDiscount,
    filtered,
    setFiltered,
    name,
    setName,
    tel,
    setTel,
    email,
    setEmail,
    add,
    setAdd,
    filteredSelected,
    showCoupon,
    setShowCoupon,
    discount,
    discountInput,
    setDiscountInput,
    base,
    setBase,
    discountedTotal,
    correct,
    setCorrect
  };

  return (
    <AnswersContext.Provider value={AnsersContextValue}>
      {children}
    </AnswersContext.Provider>
  );
};
