import React, { Component } from "react";

import api from "../services/api";

class ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {rank:[]};
  }

  
  componentDidMount (){
    api
      .get("/ranking")
      .then((resp) => {
      console.log(resp.data,this.state)
        let rank = resp.data
        this.setState({rank} );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    
    return <div id='rankDiv' className='rank-div'>
      {this.state.rank.map((ranker,i)=>{<li key={i}>ranker</li>})}    
    </div>
}
}

export default ranking;
