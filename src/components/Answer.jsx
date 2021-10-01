import React, {useState} from 'react'

export default function Answer({answer}) {

    const [selected, setSelected] = useState(false)

    return (
        <div className="pair">
            <input
              type="checkbox"
              checked={selected}
              value={answer.answer}
              onChange={(e)=> {setSelected(e.target.checked)}}
            />
            {answer.answer} ({answer.price} kn)
          </div> 
    )
}
