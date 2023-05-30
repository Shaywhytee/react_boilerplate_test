import React, { useState } from "react";
import HonestDragon from "./Honest-Dragon.png";
import ThievesJersey from "./Thieves-Jersey.png";
import EditSupreme from "./Edit-Supreme.png";

function CardDeck() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardData = [
    { image: HonestDragon },
    { image: EditSupreme },
    { image: ThievesJersey },
  ];

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrevCard = () => {
    setActiveCardIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div className="deck_wrapper">
      <button className="prev_button" onClick={handlePrevCard}>
        &#8249;
      </button>
      <div className="deck">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card ${index === activeCardIndex ? "active" : ""}`}
            style={{ transform: `translateX(${(index - activeCardIndex) * 100}%)` }}
          >
            <img src={card.image} alt={`Card ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="next_button" onClick={handleNextCard}>
        &#8250;
      </button>
    </div>
  );
}

export default CardDeck;
