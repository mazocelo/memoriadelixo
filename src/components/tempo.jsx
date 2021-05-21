import React, { Component } from "react";

class Tempo extends Component {
  constructor(props) {
    super(props);
    this.state = { começo: new Date(),
                   agora: new Date(),
                  
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
    this.setState({
      agora: new Date()
    });
  }

  render() {
    return (
      <div className="tempo">
        <h2 className="tempo-h">{ Math.ceil((this.state.começo - this.state.agora))*-1}s</h2>
      </div>
    );
  }
}

export default Tempo;
