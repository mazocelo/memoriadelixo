import React, { Component } from "react";

class Tempo extends Component {
  constructor(props) {
    super(props);
    this.state = { begin: 0 , agora: 0, start: this.props.start };
  }

  componentDidMount() {
    //this.timerID=
   setInterval(() => this.tick(), 1000);
    
  }
  /*
     componentWillUnmount() {
    clearInterval(this.timerID);
  }
  */

  componentWillUnmount(){

  }
  
  
  tick() {
  
    var novoAgora = this.state.begin - new Date();
    novoAgora = Math.round(novoAgora * 0.001);
    this.setState({
      agora: novoAgora
    });
    
  }

  render() {
    
    let h2;
    if (this.props.start) {
       
      h2=<h2 className="tempo-h">{this.state.agora * -1}s</h2>;
    }else{
      h2=<h2 className="tempo-h">0s</h2>;
    }

    return <div start ={()=>{this.setState({begin: new Date()})}} className="tempo">{h2}</div>;
  }
}

export default Tempo;
