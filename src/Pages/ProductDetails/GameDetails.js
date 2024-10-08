import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GameDetails = (props) => {
  const navigate = useNavigate();

; // Get the product data passed from Home

const location = useLocation();
// console.log(location);
const { details } = location.state


  const gameData = {
    title: details.title,
    rating: details.rate,
    reviews: 42,
    price: details.price,
    oldPrice: details.priceBeforeDiscount,
    description: `An extended and detailed description about the game. This game offers multiple worlds
    to explore, rich storylines, exciting battles, and mind-bending puzzles. Players can engage in
    multiplayer modes, experience open-world exploration, and more.`,
    details: `The game features dynamic weather, real-time multiplayer interactions, and in-game events. 
    Players can upgrade their characters, craft weapons, and unlock hidden areas as they progress.
    Regular updates ensure the game stays fresh with new content being added regularly.`,
    gallery: [
      details.img,
      details.img,
      details.img
    ],
  };

  function Rating() {
    let stars = "";
    for (let i = 0; i < Math.floor(gameData.rating); i++) {
      stars += "⭐";
    }
    return stars;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="game-gallery">
            <div className="selected-image mb-3">
              <img
                src={gameData.gallery[0]}
                alt="Game screenshot"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="game-info">
            <h1>{gameData.title}</h1>
            <div className="rating mb-3">
              <span>
                <Rating /> {gameData.rating}
              </span>{" "}
              ({gameData.reviews} reviews)
            </div>
            <div className="price mb-3">
              <span className="current-price h2 ">${gameData.price}</span>
              <span className="old-price text-muted h5 ml-2">
                <del>${gameData.oldPrice}</del>
              </span>
            </div>
            <p className="description mb-4">{gameData.description}</p>
            <p className="details mb-4">{gameData.details}</p>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              Back to Product
            </button>
            {/* <button className="btn btn-secondary" onClick={() => console.log(product)}>
              log the product
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
