import React, { useState } from 'react';


import '../styles/styles.css'

const src1 = "https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FCapturar.PNG?v=1620938384884"
const src2 ="https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FInquerito%20fk%20news.png?v=1620938407826"
const src3 ="https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FSem%20t%C3%ADtulo.png?v=1620938467861"
const src4 ="https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FPortaria%20Eleva%20Sal%C3%A1rio%20de%20bolsonaro.png?v=1620939194426"
const src5 ="https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2FBolsonaro%20e%20Mil%C3%ADcia.png?v=1620939289084"
const src6 ="https://cdn.glitch.com/ee2b2e5b-f1c2-458e-83cd-dbede40e5fec%2Fluxuria%20de%20bolsonaro.png?v=1620939762682"
      


const ImgArray = [src1,src2,src3,src4,src5,src6]

const jafoi =[]

const Cardi = (props)=>{
  return(
    <div onClick={reveal} class="card">
        <img class="imgs card-img"src ={newNumber()}></img>
</div>
)}




function reveal(e){
    var real = e.target.childNodes[0]
    console.log(e.target)
    real.classList.add('block')
    real.classList.remove('imgs')
}


function randomico(){
  var min = Math.ceil(0);
  var max = Math.floor(5);
  var numeroF = Math.floor(Math.random() * (max - min)) + min;
    
  //var limite = false;
  return numeroF;
 
  
}
function newNumber(){
  var novoNumero = randomico()
  var limite;
  jafoi.push(novoNumero)
  console.log(jafoi)
  jafoi.map((n,i)=>{
    if(n == novoNumero){
      
      limite = true;
    }
    if(limite ==true){
      while(n==novoNumero){
        novoNumero = randomico();
        console.log(n)
      }  
    }
    
  })
  return ImgArray[novoNumero]; 
   
}

export default function Card(props){
  return(
    
    <div>
      <div class= "painel">
        <Cardi />
        <Cardi />
        <Cardi />
        <Cardi />
        <Cardi />
        <Cardi />
      </div>
      <div class='painel'>
        <Cardi />
        <Cardi />
        <Cardi />
        <Cardi />
        <Cardi/>
        <Cardi/>
      </div>
     </div>
  )
}
