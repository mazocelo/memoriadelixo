import React, { Component } from "react";

class Tempo extends Component {
  constructor(props) {
    super(props);
    this.state = { começo: new Date(),
                   agora: 0,
                    start:false,
                 };
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

  tick() {
    var novoAgora = this.state.começo - new Date()
    novoAgora =Math.round(novoAgora *0.001) 
    this.setState({
      agora: novoAgora
    });
  }

  render() {
    return (
      <div className="tempo">
        <h2 className="tempo-h">{ifthis.state.agora*-1}s</h2>
      </div>
    );
  }
}

export default Tempo;
