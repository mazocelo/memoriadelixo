import React, { Component } from "react";

import "../styles/styles.css";

import Ranking from "./ranking.jsx";

import api from "../services/api";

const CardLogo =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2Flatadelixo.png?v=1621015281528";

const cardsN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const initialState = {
  nickname: "",
  count: 0,
  point: "",
  lastElement: [],
  lastImage: [],
  pontos: 0,
  win: false,
  winText: 0,
  sending: false
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
                this.setState({ pontos: this.state.pontos + 1 });
                this.setState({ count: 0 });
                console.log(this.state.pontos);
                //vencer
                if (this.state.pontos == 5) {
                  var painel = document.querySelector(".painel");
                  painel.style.opacity = 0.5;
                  var tempo = document.querySelector(".tempo-h");
                  this.setState({ win: true, winText: tempo.outerText });
                  this.victory();
                }
              } else {
                setTimeout(() => {
                  this.state.lastElement.classList.add("diVirada");
                  this.state.lastImage.classList.add("viradas");
                  this.state.lastImage.classList.remove("block");
                  image.classList.add("viradas");
                  image.classList.remove("block");
                  div.classList.add("diVirada");
                  this.setState({ count: 0 });
                }, 1200);
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
    if (this.state.win) {
      var inputs = document.ocument.querySelector("#vitoria");
      inputs.style.opacity = 1;
      inputs.focus();
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
  /*
  componentWilMount() {
    this.victory()
  }
*/

  victory() {
    var inputs = document.ocument.querySelector("#vitoria");
    inputs.style.opacity = 1;
    inputs.focus();
  }

  sendScore(e) {
    this.setState({ sending: true });
    var nickname = this.state.nickname;
    var tempo = this.state.winText;
    tempo = tempo.substring(0, tempo.length - 1);
    tempo = parseInt(tempo, 10);
    api
      .post("/ranking", {
        nickname,
        tempo
      })
      .then(response => {
        window.location.reload();
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
  imgZoom(e) {
    console.log(e.target, window.innerWidth);
  }

  saveNickName(e) {
    var nickname = e.target.value;
    this.setState({ nickname });
    // console.log(this.state.nickname);
  }
  render() {
    let input;
    let botao;
    if (this.state.sending) {
      botao = <button className="mal-feito">Enviando...</button>;
    } else {
      botao = (
        <button
          className="mal-feito"
          onClick={e => {
            this.sendScore(e);
          }}
        >
          Fora Bolsonaro!
        </button>
      );
    }

    if (this.state.win) {
      input = (
        <div id="vitoria" className="vitoria-caixa">
          <h4 className="vitoria-label">Seu tempo foi {this.state.winText}</h4>
          <input
            className="vitoria-input"
            type="text"
            placeholder="digite seu nick"
            onChange={e => {
              this.saveNickName(e);
            }}
          />
          {botao}
        </div>
      );
    } else {
    }
    return (
      <div>
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
                  onMouseOver={e => {
                    this.imgZoom(e);
                  }}
                  onDrag={e => {
                    this.imgZoom(e);
                  }}
                  onMouseLeave={e => {}}
                  src={this.props.img[i]}
                ></img>
              </div>
            );
          })}
        </div>
        {input}
        <Ranking />
      </div>
    );
  }
}
export default Cards;
