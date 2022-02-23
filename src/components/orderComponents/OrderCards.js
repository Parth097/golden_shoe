import React from "react";
import OrderCardItem from "./OrderCardItem";
import "./OrderCards.css";

function OrderCards() {
  return (
    <div className="cards">
      <h1>Your Orders</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <OrderCardItem
              src="images/productImages/nike_1.jpg"
              text="Order ID: 1"
              label="Order"
              path="/OrderDetails"
            />
            <OrderCardItem
              src="images/productImages/nike_4.jpg"
              text="Order ID: 2"
              label="Order"
              path="/OrderDetails"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderCards;
