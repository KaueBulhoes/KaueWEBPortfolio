import React, { useState, useEffect } from 'react';
import FlashcardDeck from './components/FlashcardDeck.jsx';
import flashcardsData from './data/aws_flashcards_ptbr.json';

export default function App() {
  const [cards, setCards] = useState([]);
  const [missed, setMissed] = useState([]);
  const [round, setRound] = useState(1);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Shuffle cards once on load
    const shuffled = [...flashcardsData].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const handleSwipe = (isCorrect, card) => {
    if (!isCorrect) {
      setMissed((prev) => [...prev, card]);
    }
  };

  const handleDeckFinished = () => {
    if (missed.length === 0) {
      setCompleted(true);
    } else {
      setCards(missed);
      setMissed([]);
      setRound((r) => r + 1);
    }
  };

  const handleReset = () => {
    const shuffled = [...flashcardsData].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setMissed([]);
    setRound(1);
    setCompleted(false);
  };

  return (
    <div className="app-container">
      <h1>Flashcards AWS Cloud Practitioner</h1>
      {completed ? (
        <div className="completed">
          <h2>Parabéns! Você concluiu todas as cartas 🎉</h2>
          <button onClick={handleReset}>Resetar e começar de novo</button>
        </div>
      ) : (
        <>
          <p>Rodada atual: {round}</p>
          <p>Cartas restantes: {cards.length}</p>
          <FlashcardDeck
            cards={cards}
            onSwipe={handleSwipe}
            onDeckFinished={handleDeckFinished}
          />
          <button className="reset-btn" onClick={handleReset}>
            Resetar todas as cartas
          </button>
        </>
      )}
    </div>
  );
}