import React, { Component } from "react";


class Tempo extends Component {
  constructor(props){
    super()
    this.state = {tempo: new Date.now()}
  }
  render() {
    return (
      <div className="tempo">
        <h2 className="tempo-h">{this.state.tempo}</h2>
      </div>
    );
  }
}

export default Tempo;
