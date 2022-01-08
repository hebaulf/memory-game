import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard';
// styles
import { GlobalStyle } from './GlobalStyle';
import { Container, Header, Button, CardGrid } from "./styles";

// Array of images
const cardImages = [
  {"src": "memory-game/img/ciri.jpg", matched:false },
  {"src": "memory-game/img/emhyr.jpg", matched:false },
  {"src": "memory-game/img/geralt.jpg", matched:false },
  {"src": "memory-game/img/jaskier.jpg", matched:false },
  {"src": "memory-game/img/triss.jpg", matched:false },
  {"src": "memory-game/img/yennefer.jpg", matched:false }
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle cards for a new game
  const shuffleCards = () => {
    const shuffledCards = [ ...cardImages, ...cardImages ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
  }

  // Handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // Compare two selected cards
  useEffect(() => {
    if ( choiceOne && choiceTwo) {
      setDisabled(true);
      if ( choiceOne.src === choiceTwo.src ) {
        // If the src of the two chosen cards are the same 
        // we have to update the cards state
        setCards(prevCards => {
          // We take the previous cards state to update
          // we return a new array of cards using the map method
          return prevCards.map(card => {
            // for each card we check if a card src is equal to chosen card src
            if(card.src === choiceOne.src) {
              // If that is true we return the updated cards with "matched: true"
              // This will be set on both cards because they have the same src.
              return { ...card, matched: true };
            } else {
              // If that is NOT true we return the unchanged card
              return card;
            }
          })
        });
        // Reset turn after update
        resetTurn();
      } else {
        // If no match then set timeout of 1 sec for reset turn
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  // Start game automatically
  useEffect(() => {
    shuffleCards();
  }, [])

  return (
    <Container className="App">
      <Header>
        <h1>Memory Game</h1>
        <div className="header-right">
          <p>Turns: {turns}</p>
          <Button onClick={shuffleCards}>New Game</Button>
        </div>
      </Header>
      <CardGrid className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched }
            disabled={disabled}
          />
        ))}
      </CardGrid>
      <GlobalStyle />
    </Container>
  );
}

export default App;
