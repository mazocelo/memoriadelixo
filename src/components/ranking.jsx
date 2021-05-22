import React, { Component } from "react";

import api from "../services/api";

class ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  componentDidMount () {
    api
      .get("/ranking")
      .then((resp) => {
      console.log(resp.data,this.state)
        this.setState(resp.data );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    var rank;
    var ranking;
    if(this.state.rank){
      ranking =this.state.rank 
      rank = rank.map((r,i)=>{
        return <h2>{r}</h2>  
      })
    }
    else{}
    return <div id='rankDiv' className='rank-div'>
      {rank}    
    </div>
}
}

export default ranking;
