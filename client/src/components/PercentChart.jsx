import React from 'react';
import styled from 'styled-components';

const Chart = styled.div`
  background-color:${props => props.color};
  width:${props => props.width};
  height:${props => props.height}
  border: 1px solid black;
`;

const Player = styled.div`
  background-color:${props => props.color};
  width:${props => props.width};
  height:${props => props.height}
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
  }
  border: 1px solid black;
`;

class PlayerEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.onHover = this.onHover.bind(this);
    this.offHover = this.offHover.bind(this);
  }

  onHover() {
    this.setState({ hovered: true });
  }

  offHover() {
    this.setState({ hovered: false });
  }

  render() {
    const {
      overallWidth,
      overallHeight,
      totalAttempts,
      attempts,
      successes,
      name
    } = this.props;
    const { hovered } = this.state;
    return (
      <Player
        width={`${overallWidth * successes / attempts}px`}
        height={`${overallHeight * attempts / totalAttempts - 2}px`}
        onMouseEnter={this.onHover}
        onMouseOut={this.offHover}
        onBlur={this.offHover}
      >
        {name}
        {hovered && `: ${Math.round(successes / attempts * 100)}%`}
      </Player>
    );
  }
}

const ChartContainer = ({ width, height, data, teamName, statName }) => {
  const totalAttempts = data.reduce((sum, player) => player.attempts + sum, 0);
  const totalSuccesses = data.reduce((sum, player) => player.successes + sum, 0);
  return (
    <div>
      {`${teamName}: ${(totalAttempts / totalSuccesses).toFixed(2)} ${statName}`}
      <Chart width={`${width}px`} height={`${height}px`}>
        {data.map(player => (
          <PlayerEntry
            overallWidth={width}
            overallHeight={height}
            totalAttempts={totalAttempts}
            attempts={player.attempts}
            successes={player.successes}
            name={player.name}
          />
        ))}
      </Chart>
    </div>
  )
};


export default ChartContainer;
