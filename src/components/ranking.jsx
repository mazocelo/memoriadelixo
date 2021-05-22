import React, { Component } from "react";

import api from "../services/api";

class ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {rank:[]};
  }

  
  componentWillMount() {
    api
      .get("/ranking")
      .then(resp => {
      console.log(resp.data,this.state)
        this.setState({ rank:resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <Div>
      {this.state.rank}    
    </Div>
}
}

export default ranking;
