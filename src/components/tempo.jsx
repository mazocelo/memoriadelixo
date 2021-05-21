import React, { Component } from "react";

class Tempo extends Component {
  constructor(props) {
    super(props);
    this.state = { begin: this.props.begin, agora: 0, start: this.props.start };
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

  componentWillUnmount() {}

  tick() {
    var novoAgora = new Date();
    -this.state.begin;
    novoAgora = Math.round(novoAgora * 0.001);
    this.setState({
      agora: novoAgora
    });
    console.log(this.state.begin, this.props.start);
  }

  render() {
    let h2;
    if (this.props.start) {
      h2 = <h2 className="tempo-h">{this.state.agora}s</h2>;
    } else {
      h2 = <h2 className="tempo-h">0s</h2>;
    }
    return <div className="tempo">{h2}</div>;
  }
}

export default Tempo;