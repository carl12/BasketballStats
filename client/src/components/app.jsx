import React from 'react';
import styled from 'styled-components';
import AbsoluteChart from './AbsoluteChart.jsx';
import PercentChart from './PercentChart.jsx';

const dataPercent = [{ name: 'a', attempts: 20, successes: 3 }, { name: 'b', attempts: 50, successes: 30}, { name: 'b', attempts: 10, successes: 5 }, { name: 'b', attempts: 10, successes: 5 }];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      team: null,
      stat: null,
      dataAbs: null,
    };
    const path = window.location.pathname.split('/');
    if (path.length > 3) {
      ([this.state.team, this.state.stat] = path.slice(2));
    }
  }

  componentDidMount() {
    const { team, stat } = this.state;
    let url;
    if (team && stat) {
      url = `http://localhost:3000/api/team/${team}/${stat}`;
      fetch(url)
        .then(res => res.json())
        .then((resData) => {
          if (stat.length === 3) {
            this.setState({ dataAbs: resData });
          } else {
            this.setState({ data: resData });
          }
        });
    } else {
      url = 'http://localhost:3000/api/team/GSW/PTS';
      this.setState({ team: 'GSW', stat: 'PTS' }, () => {
        fetch(url)
          .then(res => res.json())
          .then((resData) => {
            this.setState({ dataAbs: resData });
          });
      });
    }
  }

  render() {
    const {
      team, data, stat, dataAbs,
    } = this.state;
    
    return (
      <div>
        Here is the app
        {dataAbs && <AbsoluteChart width={300} height={800} data={dataAbs} teamName={team} statName={stat} />}
        {data && <PercentChart width={300} height={800} data={data} teamName={team} statName={stat} />}
      </div>
    );
  }
}

export default App;
