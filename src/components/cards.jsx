import React, { useState } from 'react';


import Img1 from './img1.jsx'
import Img2 from './img2.jsx'
import Img3 from './img3.jsx'
import Img4 from './img4.jsx'
import Img5 from './img5.jsx'
import Img6 from './img6.jsx'
import '../styles/styles.css'

const ImgArray = [<Img1/>,<Img2/>,<Img3/>,<Img4/>,<Img5/>,<Img6/>]
const Cardi = (props)=>{
  return(
    <div onClick={reveal} class="card">
        {ImgArray[props.num]}
</div>
)}
function reveal(e){
    var real = e.target.childNodes[0]
    real.classList.add('block')
    real.classList.remove('imgs')
}

export default function Card(props){
  return(
    <div>
      <div class= "painel">
        <Cardi num ='1'/>
        <Cardi num ='2'/>
        <Cardi num ='3'/>
        <Cardi num ='4'/>
        <Cardi num ='5'/>
        <Cardi num ='0'/>
      </div>
      <div class='painel'>
        <Cardi num ='1'/>
        <Cardi num ='2'/>
        <Cardi num ='3'/>
        <Cardi num ='4'/>
        <Cardi num = '5'/>
        <Cardi num ='0'/>
      </div>
     </div>
  )
}
