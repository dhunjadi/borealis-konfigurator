import React from 'react'

export default function SendMessage({setShowSendMessage}) {
    return (
        <div className='send-modal'>
            <div className="send-modal-title">
                <h2>Konfigurator servisa</h2>
            </div>
            <div className="send-modal-text">
                <h2>Vaša prijava je uspješno poslana</h2>
                <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala vam!</p>
            </div>
            <div className="send-modal-btn">
                <button onClick={()=> setShowSendMessage(false)}>Zatvori</button>
            </div>
        </div>
    )
}
