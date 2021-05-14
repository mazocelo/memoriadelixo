import React, { useState } from "react";

import "../styles/styles.css";

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

var ImgArray = [src1, src2, src3, src4, src5, src6];
var ArrayIgual = ImgArray;

var jafoi = [];

var limite = false;
var repetidos = [];
var revealed = false;
var revealed2 = false;

function Card(props) {
  const [count, setCount] = useState(0);
  const [novoArray, setArray] = useState(ImgArray);

  function randomico(i) {
    var min = Math.ceil(0);
    var max = Math.floor(5);
    var numeroFinal;
    var nArr =[]
    imgArray.map((img,i)=>{
       var RandomN= Math.floor(Math.random() * (max - min)) + min;
        numeroFinal = RandomN
    })
    
    return ArrayIgual[numeroFinal];
  }

  function reveal(e) {
    let image = e.target.childNodes[0];
    if (count < 2) {
      if (image) {
        image.classList.remove("viradas");
        image.classList.add("block");
        setCount(count + 1);
        console.log(count)
        
      }else{
      
      }
    }
  }
  function unreveal(e) {
    let image = e.target;
    image.classList.add("viradas");
    image.classList.remove("block");
    setCount(count - 1);
  }

  return (
    <div>
      <div className="painel">
        {ImgArray.map((img, i) => {
          return (
            <div key={i + "d2"} onClick={reveal} className="card">
              <img
                key={i + "img"}
                className="viradas imgs"
                onClick={unreveal}
                src={novoArray[i]}
              ></img>
            </div>
          );
        })}
      </div>
      <div className="painel"></div>
    </div>
  );
}
export default Card;
