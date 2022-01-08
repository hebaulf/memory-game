import { Wrapper, Card } from './SingleCard.styled'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
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
                    src="memory-game/img/cover.jpg" 
                    onClick={handleClick} 
                    alt="card back"
                />
            </Card>
        </Wrapper>
    )
}