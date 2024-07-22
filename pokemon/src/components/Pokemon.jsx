import React from 'react'
import './pokemon.css';
export default function Pokemon() {

  return (
    
<div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(card)}>
            {card.type === 'image' ? (
              <img src={card.url} alt={card.title} />
            ) : (
              <p>{card.text}</p>
            )}
          </div>
        ))}
      </div>
  )
}
