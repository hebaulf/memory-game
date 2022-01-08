import { Wrapper, Card } from './SingleCard.styled'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        // If card is not disabled then we can click a card to turn it over
        if (!disabled) { 
            handleChoice(card);
        }
    }

    return (
        <Wrapper>
            <Card className={flipped ? "flipped" : ""}>
                <img 
                    className="front" 
                    src={card.src} 
                    alt="card front"
                />
                <img 
                    className="back" 
                    src="./img/cover.jpg" 
                    onClick={handleClick} 
                    alt="card back"
                />
            </Card>
        </Wrapper>
    )
}