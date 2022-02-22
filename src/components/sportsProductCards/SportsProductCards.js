import React from "react";
import SportsCardItem from "./SportsCardItem";
import "./SportsProductCards.css";

function SportsProductCards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <SportsCardItem
              src="images/productImages/nike_1.jpg"
              text="Nike Waffle Trainer 2"
              price="£84.95"
              label="Nike"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/nike_2.jpg"
              text="Nike Air Max Plus"
              price="£154.95"
              label="Nike"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/nike_3.jpg"
              text="Nike Air Force 1 Pixel"
              price="£109.95"
              label="Nike"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/nike_4.jpg"
              text="Nike Air Force 1 '07"
              price="£99.95"
              label="Nike"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/nike_5.jpg"
              text="Nike Air Force 1 Shadow"
              price="£109.95"
              label="Nike"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <SportsCardItem
              src="images/productImages/addidas_1.jpg"
              text="TERREX SWIFT R2 GTX SHOES"
              price="£130"
              label="Addidas"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/addidas_2.jpg"
              text="TERREX AX4 GORE-TEX HIKING SHOES"
              price="£100"
              label="Addidas"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/addidas_3.jpg"
              text="TERREX FREE HIKER MADE TO BE REMADE"
              price="£220"
              label="Addidas"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/addidas_4.jpg"
              text="FIVE TEN SLEUTH SLIP-ON MOUNTAIN BIKE SHOES"
              price="£60"
              label="Addidas"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/addidas_5.jpg"
              text="TERREX FREE HIKER GORE-TEX HIKING SHOES"
              price="£180"
              label="Addidas"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <SportsCardItem
              src="images/productImages/reebok_1.jpg"
              text="Reebok HIIT Shoes"
              price="£60"
              label="Reebok"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/reebok_2.jpg"
              text="Nano X1 Adventure Shoes"
              price="£110"
              label="Reebok"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/reebok_3.jpg"
              text="Nano X1 TR Adventure Shoes"
              price="£110"
              label="Reebok"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/reebok_4.jpg"
              text="Nano X1 Shoes"
              price="£100"
              label="Reebok"
              path="/"
            />
            <SportsCardItem
              src="images/productImages/reebok_5.jpg"
              text="Nano X1 Grit Shoes"
              price="£110"
              label="Reebok"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SportsProductCards;
