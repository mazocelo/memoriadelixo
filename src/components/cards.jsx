import React, { Component } from "react";

import "../styles/styles.css";

const CardLogo =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2Flatadelixo.png?v=1621015281528";

const src1 =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FCapturar.PNG?v=1620938384884";
const src2 =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FInquerito%20fk%20news.png?v=1620938407826";
const src3 =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FSem%20t%C3%ADtulo.png?v=1620938467861";
const src4 =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FPortaria%20Eleva%20Sal%C3%A1rio%20de%20bolsonaro.png?v=1620939194426";
const src5 =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FBolsonaro%20e%20Mil%C3%ADcia.png?v=1620939289084";
const src6 =
  "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2Fluxuria%20de%20bolsonaro.png?v=1620939762682";

var ImgArray = [
  src1,
  src2,
  src3,
  src4,
  src5,
  src6,
  src1,
  src2,
  src3,
  src4,
  src5,
  src6
];

var jafoi = [];

var limite = false;

var revealed = false;
var revealed2 = false;
/*
var Startbtn=()=> {
    if(started){
      return <h2>bomjogo</h2>
    }else{
    return <button onClick={randomArray}>Iniciar</button>;
  }}
*/
export class Cards extends Component {
  constructor(props){
    this.state={
      count: 0,
      point:'',
      lastElement:'',
      lastImage:'',
      started: false,
      min :Math.ceil(0),
      max : Math.floor(11),
      srcNew :"",
      array : ImgArray,
    }
    this.randomArray()
  
  
  }


   randomSrc() {
    var RandomN = Math.floor(Math.random() * (this.state.max - this.state.min)) + this.state.min;
    //srcNew = arrayPassageiro[RandomN];
    //max--;
    //arrayPassageiro.splice(RandomN, 1);
    //console.log(RandomN);
    //console.log(arrayPassageiro);
    //return srcNew;
  }

   randomArray() {
     var arrayPassageiro = ImgArray
    var copyState = this.state;
    ImgArray.forEach((img, i) => {
      var RandomN = Math.floor(Math.random() * ((this.state.max - i)-this.state.min)) + this.state.min;
      copyState.array[i] = arrayPassageiro[RandomN];
      //setArray(novoArray);
      arrayPassageiro.splice(RandomN, 1);
    });
     copyState.started = true;
    this.setState(copyState);
    return 
  }

   reveal(e) {
     
   
    var copyState = this.state;
    let image = e.target.childNodes[0];
    let div = e.target;
    if (this.state.count < 2) {
      if (image) {
        if (div.classList[1] == "diVirada") {
          image.classList.remove("viradas");
          image.classList.add("block");
          div.classList.remove("diVirada");
          copyState.count = copyState.count+1
          this.setState(copyState);

          //console.log(count);
          if (this.state.count == 1) {
            if (this.state.point === image.src) {
              div.classList.add("div-point");
              this.state.lastElement.classList.add("div-point");
              this.state.lastImage.classList.add("point");
              image.classList.add("point");
              
              copyState.count = 0
              this.setState(copyState);
            } else {
              /*
            lastElement.classList.add('diVirada')
            lastImage.classList.add("viradas");
            lastImage.classList.remove("block");
            image.classList.add("viradas");
            image.classList.remove("block");
            div.classList.add("diVirada");
               setCount(0);
            */
            }
          } else {
            this.setState.lastElement(div);
            this.setState.lastImage(image);
          this.setState.point(image.src);
          }
        }
      } else {
      }
    }
  }
   unreveal(e) {
     
    var copyState = this.state;
    let image = e.target;
    let div = e.target.parentNode;
    if (image.classList[2] == "point") {
    } else {
      image.classList.add("viradas");
      image.classList.remove("block");
      //console.log(div);
      div.classList.add("diVirada");
      copyState.count = copyState.count-1
      this.setState(copyState);
    }
  }

  

  render(){
return (
    <div className="painel">         
       
      {ImgArray.map((img, i) => {
        
          return
          <div
            name="divImg"
            key={i + "d2"}
            onClick={this.reveal}
            className="card diVirada"
          >
            <img
              key={i + "img"}
              className="viradas imgs"
              onClick={this.unreveal}
              src={this.state.array[i]}
            ></img>
          </div>
        
      })
}
    </div>
      )}
  
}
