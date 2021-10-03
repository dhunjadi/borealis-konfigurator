import { createContext, useState, useRef, useEffect } from "react";
import pageList from "../pageList";

export const AnswersContext = createContext();

export const AnswersContextProvider = ({ children }) => {
  // First step
  const [radio, setRadio] = useState("");
  //Second step
  const [selected, setSelected] = useState([]);
  const [foundCopy, setFoundCopy] = useState([]);
  // Second step - total
  const [total, setTotal] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [showCoupon, setShowCoupon] = useState(true)
  const [discountInput, setDiscountInput] = useState(false);
  const prevRef = useRef();
  //Third step
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [add, setAdd] = useState("");

  // Previous total
  useEffect(() => {
    prevRef.current = total;
  });

  const prevTotal = prevRef.current;

  let filteredSelected = [];
  for (let i = 0; i < selected.length; i++) {
    filteredSelected = [
      ...filteredSelected,
      ...pageList[1].answers.filter(
        (ans) => ans.price === selected[i]
      ),
    ];
  }

  const discount = prevTotal * 0.3

  console.log(filteredSelected)
  
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
    total,
    setTotal,
    filtered,
    setFiltered,
    prevTotal,
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
    setDiscountInput
  };

  return (
    <AnswersContext.Provider value={AnsersContextValue}>
      {children}
    </AnswersContext.Provider>
  );
};
