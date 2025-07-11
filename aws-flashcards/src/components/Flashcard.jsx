import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

export default function Flashcard({ card, onSwipe, isTop }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      onSwipe(true);
    } else if (direction === 'left') {
      onSwipe(false);
    }
    setShowAnswer(false);
  };

  return (
    <TinderCard
      className="flashcard"
      key={card.question}
      onSwipe={handleSwipe}
      preventSwipe={["up", "down"]}
    >
      <div
        className={`card-inner ${showAnswer ? 'reveal' : ''}`}
        onClick={() => setShowAnswer((prev) => !prev)}
      >
        <div className="card-front">
          <p>{card.question}</p>
          <small>(Clique para revelar resposta)</small>
        </div>
        <div className="card-back">
          <p>{card.answer}</p>
          <small>Deslize para direita se acertou, esquerda se errou</small>
        </div>
      </div>
    </TinderCard>
  );
}