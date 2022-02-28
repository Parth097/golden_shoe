import React, { Component } from "react";
import SportsProductCards from "../sportsProductCards/SportsProductCards";
import "../sportsProductCards/SportsProductCards.css";
import FilterComp from "../FilterComponent/FilterComp";

class Sports extends Component {
  render() {
    return (
      <div>
        <h1>Sports</h1>
        <FilterComp />
        <SportsProductCards />
      </div>
    );
  }
}

export default Sports;
