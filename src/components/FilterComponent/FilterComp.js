import React, { Component } from "react";
import "../FilterComponent/FilterComp.css";

class FilterComp extends Component {
  render() {
    return (
      <div>
        <h4>Filter Settings</h4>
        <div className="filter-container">
          <h5>Price</h5>
          <label class="container">
            £0-£50
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
          <label class="container">
            £50-£100
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
          <label class="container">
            £100-£200
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="filter-container">
          <h5>Colour</h5>
          <label class="container">
            Black
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Blue
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Pink
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="filter-container">
          <h5>Brand</h5>
          <label class="container">
            Nike
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Reebok
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Addidas
            <input type="checkbox"></input>
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    );
  }
}

export default FilterComp;
