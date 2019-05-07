import React from 'react';
import Chart from './AbsoluteChart.jsx';

const data = [{ name: 'a', amount: 10 }, { name: 'b', amount: 10 }, { name: 'b', amount: 10 }, { name: 'b', amount: 10 }];

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    const a = window.location.pathname.split('/');
    let url;
    if (a.length > 3) {
      url = `http://localhost:3000/api/team/${a[2]}/${a[3]}`;
    } else {
      url = `http://localhost:3000/api/team/GSW/REB`;
    }
    fetch(url)
      .then(res => res.json())
      .then(resData => this.setState({ data: resData }));
  }

  render() {
    return (
      <div>
        Here is the app
        {this.state.data && <Chart width={400} height={800} data={this.state.data} />}
      </div>
    );
  }
}

export default App;
