import React, { useState } from "react";

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

function Cards(props) {
  const [count, setCount] = useState(0);
  const [point, setPoint] = useState("");
  const [ArrayState, setArray] = useState(ImgArray);
  const [lastElement, setLastElement] = useState("");
  const [lastImage, setLastImage] = useState("");
 var min = Math.ceil(0);
  var max = Math.floor(11);
  
var srcNew = "";
 var i =0
var arrayPassageiro = ImgArray;
  
  function randomSrc() {
 
 
  var RandomN = Math.floor(Math.random() * (max  - min)) + min;
  console.log(RandomN);
  //srcNew = ArrayState[RandomN];
  srcNew = ImgArray[RandomN]
    console.log(srcNew)
  ImgArray.splice(RandomN, 1);
   // setArray(ImgArray)
   max--
  return srcNew;
}

  
  
  
  
  function reveal(e) {
    let image = e.target.childNodes[0];
    let div = e.target;
    if (count < 2) {
      if (image) {
        if (div.classList[1] == "diVirada") {
          image.classList.remove("viradas");
          image.classList.add("block");
          div.classList.remove("diVirada");
          setCount(count + 1);

          console.log(count);
          if (count == 1) {
            if (point === image.src) {
              div.classList.add("div-point");
              lastElement.classList.add("div-point");
              lastImage.classList.add("point");
              image.classList.add("point");
              setCount(0);
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
            setLastElement(div);
            setLastImage(image);
            setPoint(image.src);
          }
        }
      } else {
      }
    }
  }
  function unreveal(e) {
    let image = e.target;
    let div = e.target.parentNode;
    if (image.classList[2] == "point") {
    } else {
      image.classList.add("viradas");
      image.classList.remove("block");
      //console.log(div);
      div.classList.add("diVirada");
      setCount(count - 1);
    }
  }
  return (
    <div className="painel">
      {ImgArray.map((img, i) => {
        // randomi(i)
        var source = randomSrc
        return (
          <div
            name="divImg"
            key={i + "d2"}
            onClick={reveal}
            className="card diVirada"
          >
            <img
              key={i + "img"}
              className="viradas imgs"
              onClick={unreveal}
              src={source}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
/*
 <img 
      ClassName="logo"
      src={CardLogo}>
      </img>

*/
