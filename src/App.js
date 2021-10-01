import React, { useState } from 'react'
import './css/styles.css'
import Modal from './components/Modal'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='App'>
      <p>Pritisnite gumb niže kako biste pokrenuli</p>
      <button onClick={()=> setShowModal(true)}>Pokreni konfigurator</button>
      {showModal && 
        <Modal 
        setShowModal={setShowModal}
        />}
    </div>
  )
}
