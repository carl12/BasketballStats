import React from 'react';
import AbsoluteChart from './AbsoluteChart.jsx';
import PercentChart from './PercentChart.jsx';

const dataPercent = [{ name: 'a', attempts: 20, successes: 3 }, { name: 'b', attempts: 50, successes: 30}, { name: 'b', attempts: 10, successes: 5 }, { name: 'b', attempts: 10, successes: 5 }];

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      data: null, 
      team: null,
      stat: null
    };
    const path = window.location.pathname.split('/');
    if (path.length > 3) {
      this.state.team = path[2];
      this.state.stat = path[3];
    } 
  }

  componentDidMount() {
    const { team, stat } = this.state;
    let url;
    if (team && stat) {
      url = `http://localhost:3000/api/team/${team}/${stat}`;
    } else {
      url = `http://localhost:3000/api/team/GSW/PTS`;
    }
    fetch(url)
      .then(res => res.json())
      .then(resData => this.setState({ data: resData }));
  }

  render() {
    const { team, data, stat } = this.state;
    return (
      <div>
        Here is the app
        {/* {data && <AbsoluteChart width={300} height={800} data={data} teamName={team} statName={stat} />} */}
        { <PercentChart width={300} height={800} data={dataPercent} teamName={team} statName={stat} />}
      </div>
    );
  }
}

export default App;
