import React from 'react'

import Img1 from './img1.jsx'
import Img2 from './img2.jsx'
import Img3 from './img3.jsx'
import Img4 from './img4.jsx'
import Img5 from './img5.jsx'
import Img6 from './img6.jsx'
import '../styles/styles.css'

const ImgArray = [Img1,Img2,Img3,Img4,Img5,Img6]
const Cardi = (props)=>{
  return(
    <div onClick={reveal} class="card-img">
    </div>
)}
function reveal(e){
    e.target.classList.remove('none')
  
}

export default function Card(props){
  return(
    <div class= "painel">
      U
      <Cardi><Img1/></Cardi>
      <Cardi/>
      <Cardi/>
      <Cardi/>
      <Cardi/>
    </div>
     
  )
}
/*
 <Img1/>
      <Img6/>
      <Img1/>
      <Img2/>
      <Img2/>
      <Img3/>
      <Img3/>
      <Img4/>
      <Img4/>
      <Img5/>
      <Img5/>
      <Img6/>*/