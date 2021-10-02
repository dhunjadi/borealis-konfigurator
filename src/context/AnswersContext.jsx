import {createContext, useState, useRef, useEffect } from 'react'

export const AnswersContext = createContext();

export const AnswersContextProvider = ({children}) => {
    // First step
    const [radio, setRadio] = useState(''); 
    //Second step
    const [selected, setSelected] = useState([]) 
    // Second step - total
    const [total, setTotal] = useState(0) 
    const [filtered, setFiltered] = useState([])
    const prevRef = useRef();
    //Third step
  
  
    // Previous total
  useEffect(()=>{
    prevRef.current = total
})

const prevTotal = prevRef.current
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
        total,
        setTotal,
        filtered,
        setFiltered,
        prevTotal,
    }

    return(
        <AnswersContext.Provider value={AnsersContextValue}>
        {children}
        </AnswersContext.Provider>
    )
}