import React from "react";
import "./GameCard.css";

export default function GameCard({ ele }) {
  const {
    id,
    image,
    title,
    name,
    description,
    genre,
    platforms,
    price,
    releaseDate,
  } = ele;
  return (
    <div>
      <div className="gameCardContainer">
        <img src={image} alt={title} className="gameCardImage" />
        <h2 className="gameCardTitle">{title}</h2>
        <p className="gameCardName">{name}</p>
        <p className="gameCardDescription">{description}</p>
        <p className="gameCardGenre">{genre}</p>
        <p className="gameCardPlatforms">{platforms}</p>
        <p className="gameCardPrice">{price}</p>
        <p className="gameCardReleaseDate">{releaseDate}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
