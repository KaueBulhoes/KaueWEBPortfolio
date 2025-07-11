import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard.jsx';

export default function FlashcardDeck({ cards, onSwipe, onDeckFinished }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // reset index when cards change (new round)
    setCurrentIndex(0);
  }, [cards]);

  const handleSwipe = (isCorrect) => {
    const card = cards[currentIndex];
    onSwipe(isCorrect, card);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= cards.length) {
      onDeckFinished();
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  if (cards.length === 0) return null;

  return (
    <div className="deck-container">
      <Flashcard card={cards[currentIndex]} onSwipe={handleSwipe} />
    </div>
  );
}