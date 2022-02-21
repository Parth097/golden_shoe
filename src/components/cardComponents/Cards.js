import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Collection!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Designer.jpg"
              text="Explore Our Latest Creations"
              label="Designer"
              path="/Designer"
            />
            <CardItem
              src="images/Sports.jpg"
              text="Explore The Latest Sport's Wear"
              label="Sports"
              path="/Sports"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/Kids.jpg"
              text="Explore The Latest Kids's Collection"
              label="Children"
              path="/Children"
            />
            <CardItem
              src="images/Mens.jpg"
              text="Explore The Latest Men's Collection"
              label="Men"
              path="/mens"
            />
            <CardItem
              src="images/Women.jpg"
              text="Explore The Latest Women's Collection"
              label="Women"
              path="/Women"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
