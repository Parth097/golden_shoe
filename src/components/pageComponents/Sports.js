import React, { Component } from "react";
import SportsProductCards from "../sportsProductCards/SportsProductCards";
import "../sportsProductCards/SportsProductCards.css";

class Sports extends Component {
  render() {
    return (
      <div>
        <h1>Sports</h1>
        <SportsProductCards />
      </div>
    );
  }
}

export default Sports;
