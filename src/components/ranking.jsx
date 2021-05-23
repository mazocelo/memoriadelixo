import React, { Component } from "react";
import api from "../services/api";

class ranking extends Component {
  constructor(props) {
    super(props);
    this.state = { rank: [], loaded: false };
  }
  componentDidMount() {
    api
      .get("/ranking")
      .then(resp => {
        const rank = resp.data;
        this.setState({ rank: rank, loaded: true });
        console.log(rank, this.state.rank);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let rank;
    if (this.state.loaded) {
      rank = this.state.rank.map((ranker, i) => {
        return (
          <div className='classification' key={"d" + i}>
            <h2 className='classificado' key={i}>
              <h3>{i+1}º </h3> {ranker.nickname} {ranker.tempo}s
            </h2>
          </div>
        );
      });
    } else {
      rank = <h2>carregando...</h2>;
    }
    return (
      <div id="rankDiv" className="rank-div">
        <h1 className="rank-title"> RANKING FORA BOZO!</h1>
        {rank}
      </div>
    );
  }
}

export default ranking;
