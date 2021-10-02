import {createContext, useState } from 'react'

export const AnswersContext = createContext();

export const AnswersContextProvider = ({children}) => {

    const [radio, setRadio] = useState('');
    const [selected, setSelected] = useState([])
    const [total, setTotal] = useState(0)
    const [filtered, setFiltered] = useState([])

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
        setFiltered
    }

    return(
        <AnswersContext.Provider value={AnsersContextValue}>
        {children}
        </AnswersContext.Provider>
    )
}