import React, { useState } from "react";
import Cards from "../components/cards.jsx";
import Tempo from "../components/tempo.jsx";
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

export default function Jogo(props) {
  const [array, setArray] = useState(ImgArray);
  const [start, setStart] = useState(false);
  const [begin, setBegin] = useState(0);
  function randomImg(e) {
    var arrayPassageiro = ImgArray;
    var copyState = [];
    var min = Math.ceil(0);
    var max = Math.floor(11);

    //nao altera a ultima img
    for (let i = max; i >= 0; i--) {
      var randomN = Math.floor(Math.random() * i);
      copyState[i] = arrayPassageiro[randomN];
      arrayPassageiro.splice(randomN, 1);
      setArray(copyState);
    }

    e.target.classList.add("none");
    setArray(copyState);
    setStart(true);
    var novaData = new Date();
    setBegin(novaData);
    return;
  }

  return (
    <div className="jogo">
      <Tempo start={start} begin={begin} />
      <button
        className="embaralhar-btn"
        onClick={e => {
          randomImg(e);
        }}
      >
        Embaralhar e Começar
      </button>
      <Cards
      
        start={start}
        img={array}
      />
    </div>
  );
}
