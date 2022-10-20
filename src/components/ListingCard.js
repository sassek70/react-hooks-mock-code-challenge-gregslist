import React, { useState } from "react";

function ListingCard({id, description, image, location, handleDelete}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const onFavorite = () => {
    setIsFavorite((isFavorite) => !isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={onFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={onFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
