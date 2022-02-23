import React, { Component } from "react";
import "../productPage/NikeWT2.css";
import DetailsThumb from './Thumbnails';

class NikeWT2 extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Waffle Trainer 2",
        src: [
          "/images/productImages/NikeWT2-1.png",
          "/images/productImages/NikeWT2-2.png",
          "/images/productImages/NikeWT2-3.png",
          "/images/productImages/NikeWT2-4.png",
        ],
        description: "Nike Waffle Trainer 2 Men's Shoe",
        content:
          "The Nike Waffle Trainer 2 brings you the classic look of Nike running.Staying true to what you love best, it features the iconic Waffle outsole and era-echoing fabrics on the upper.Its plush midsole lets you journey in comfort, while the exposed foam tongue adds the perfect touch of irreverence.",
        price:84.95,
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="details">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>£{item.price}</span>
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>

              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <button className="cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NikeWT2;
