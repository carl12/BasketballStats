import React from 'react';
import styled from 'styled-components';
import AbsoluteChart from './AbsoluteChart.jsx';
import PercentChart from './PercentChart.jsx';

const dataPercent = [{ name: 'a', attempts: 20, successes: 3 }, { name: 'b', attempts: 50, successes: 30 }, { name: 'b', attempts: 10, successes: 5 }, { name: 'b', attempts: 10, successes: 5 }];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      team: null,
      stat: null,
      dataAbs: null,
      teams: [],
      stats: [],
    };
    const path = window.location.pathname.split('/');
    if (path.length > 3) {
      ([this.state.team, this.state.stat] = path.slice(2));
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.loadTeam = this.loadTeam.bind(this);
  }


  componentDidMount() {
    console.log('did mount');
    const { teams, stats } = this.state;
    if (teams.length === 0) {
      fetch('/api/team')
        .then(res => res.json())
        .then(val => this.setState({ teams: val }));
    }
    if (stats.length === 0) {
      fetch('/api/stat')
        .then(res => res.json())
        .then(val => this.setState({ stats: val }));
    }
    this.loadTeam();
  }

  loadTeam() {
    const { team, stat } = this.state;
    console.log('loading teams', team, stat);
    let url;
    if (team && stat) {
      url = `/api/team/${team}/${stat}`;
      fetch(url)
        .then(res => res.json())
        .then((resData) => {
          if (stat.length <= 3) {
            this.setState({ dataAbs: resData, data: null });
          } else {
            this.setState({ data: resData, dataAbs: null });
          }
        });
    } else {
      url = '/api/team/GSW/PTS';
      this.setState({ team: 'GSW', stat: 'PTS' }, () => {
        fetch(url)
          .then(res => res.json())
          .then((resData) => {
            this.setState({ dataAbs: resData, data: null });
          });
      });
    }
  }

  render() {
    const {
      team, data, stat, dataAbs, teams, stats,
    } = this.state;
    console.log('rendering', data, dataAbs);
    return (
      <div>
        <select onChange={e => this.setState({ team: e.target.value }, this.loadTeam)}>
          {teams.map(myTeam => <option value={myTeam}>{myTeam}</option>)}
        </select>

        <select onChange={e => this.setState({ stat: e.target.value }, this.loadTeam)}>
          {stats.map(statListing => <option value={statListing}>{statListing}</option>)}
        </select>

        {dataAbs && <AbsoluteChart width={300} height={800} data={dataAbs} teamName={team} statName={stat} />}
        {data && <PercentChart width={300} height={800} data={data} teamName={team} statName={stat} />}
      </div>
    );
  }
}

export default App;
