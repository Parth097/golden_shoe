import React, { Component } from 'react';
import '../../App.css';
import HeroSection from '../heroComponent/HeroSection';
import Cards from '../cardComponents/Cards';



class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <Cards />
      </>
    );
  }
}

export default Home;