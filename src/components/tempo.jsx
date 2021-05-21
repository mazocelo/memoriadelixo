import React, { Component } from "react";

class Tempo extends Component {
  constructor(props) {
    super(props);
    this.state = { tempo: new Date() };
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
    this.setState({
      tempo: new Date()
    });
  }

  render() {
    return (
      <div className="tempo">
        <h2 className="tempo-h">{this.state.tempo.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Tempo;
