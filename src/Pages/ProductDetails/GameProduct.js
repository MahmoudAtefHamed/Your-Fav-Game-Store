import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GameProduct.css";

const GameProduct = (props) => {
  const navigate = useNavigate();
  
  const location = useLocation();
  // console.log(location);
  const [selectedImage, setSelectedImage] = useState(0);
  const { product } = location.state

  const images = [
    product.img,
    product.img,
    product.img,
  ];

  const gameData = {
    title: product.title,
    rating: product.rate,
    reviews: 42,
    price: product.price,
    oldPrice: product.priceBeforeDiscount,
    description:product.description,
    gallery: images,
  };

  function Rating() {
    let stars = "";
    for (let i = 0; i < Math.floor(gameData.rating); i++) {
      stars += "⭐";
    }
    return stars;
  }

  return (
    <div className="container d-flex mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="game-gallery">
            <div className="selected-image mb-3">
              <img
                src={gameData.gallery[selectedImage]}
                alt="Selected game screenshot"
                className="img-fluid rounded"
              />
            </div>
            <div className="thumbnails d-flex justify-content-center">
              {gameData.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Game screenshot ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  className={`img-thumbnail ${
                    selectedImage === index ? "border-primary" : ""
                  }`}
                  style={{ cursor: "pointer", width: "70px", height: "70px" }}
                />
              ))}
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
            <span className="h3">About The Game:</span>
            <p className="description mb-4">{gameData.description}</p>
            <button
              className="btn btn-secondary w-20 mb-3"
              onClick={() => navigate("/details",{ state: { details: product } })}
            >
              Read More
            </button>
            {/* <button
              className="btn btn-secondary w-20 mb-3"
              onClick={() => console.log(product)}
            >
              log the product
            </button> */}
            <button className="btn btn-dark btn-lg w-100 m-b-50">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProduct;
