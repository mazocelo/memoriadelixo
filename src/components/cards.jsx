import React, { Component } from "react";

import "../styles/styles.css";

const CardLogo =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2Flatadelixo.png?v=1621015281528";

const cardsN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const initialState = {
  count: 0,
  point: "",
  lastElement: [],
  lastImage: []
};

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  reveal(e) {
    if (this.props.start) {
      let image = e.target.childNodes[0];
      let div = e.target;
      if (this.state.count < 2) {
        if (image) {
          if (div.classList[1] == "diVirada") {
            image.classList.remove("viradas");
            image.classList.add("block");
            div.classList.remove("diVirada");
            this.setState({ count: this.state.count + 1 });

            if (this.state.count == 1) {
              if (this.state.point === image.src) {
                div.classList.add("div-point");
                this.state.lastElement.classList.add("div-point");
                this.state.lastImage.classList.add("point");
                image.classList.add("point");
                this.setState({ count: 0 });
              } else {
                setTimeout(() => {
                  this.state.lastElement.classList.add("diVirada");
                  this.state.lastImage.classList.add("viradas");
                  this.state.lastImage.classList.remove("block");
                  image.classList.add("viradas");
                  image.classList.remove("block");
                  div.classList.add("diVirada");
                 // console.log(this.state.count);
                  this.setState({ count: 0 });
                }, 1200);
                //this.setState({ count: 0 });
              }
            } else {
              this.setState({ lastElement: div });
              this.setState({ lastImage: image });
              this.setState({ point: image.src });
            }
          }
        } else {
        }
      }
    }
  }
  unreveal(e) {
    var copyState = this.state;
    let image = e.target;
    let div = e.target.parentNode;
    if (image.classList[2] === "point") {
    } else {
      image.classList.add("viradas");
      image.classList.remove("block");
      div.classList.add("diVirada");
      this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    return (
      <div className="painel">
        {cardsN.map((n, i) => {
          return (
            <div
              name="divImg"
              key={i + "d2"}
              onClick={e => {
                this.reveal(e);
              }}
              className="card diVirada"
            >
              <img
                key={i + "img"}
                className="viradas imgs"
                onClick={e => {
                  this.unreveal(e);
                }}
                src={this.props.img[i]}
              ></img>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Cards;
