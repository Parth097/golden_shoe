import React, { Component } from "react";
import "../../App.css";
import HeroSection from "../heroComponent/HeroSection";
import Cards from "../cardComponents/Cards";
import ImageSlider from "../sliderComponents/ImageSlider";
import { SliderData } from "../sliderComponents/SliderData";

class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <Cards />
        <h1>Adventure Awaits</h1>
        <ImageSlider slides={SliderData} />;
      </>
    );
  }
}

export default Home;
