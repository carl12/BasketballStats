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
    if (attempts === 0) {
      return <span />;
    }
    return (
      <div>
        {attempts / totalAttempts > 0.01 
        && (
        <Player
          width={`${overallWidth * successes / attempts}px`}
          height={`${overallHeight * attempts / totalAttempts - 2}px`}
          onMouseEnter={this.onHover}
          onMouseOut={this.offHover}
          onBlur={this.offHover}
        >
          {name}
          {hovered && `: ${Math.round(successes / attempts * 100)}%`}
          <div>{hovered && attempts / totalAttempts > 0.07 && `Attempts: ${attempts}`}</div>
        </Player>
        )
        }
      </div>
    );
  }
}

const ChartContainer = ({ width, height, data, teamName, statName }) => {

  const totalAttempts = data.reduce((sum, player) => player.attempts + sum, 0);
  const totalSuccesses = data.reduce((sum, player) => player.successes + sum, 0);
  return (
    <div>
      {`${teamName}: ${Math.round(totalSuccesses / totalAttempts * 100)}% ${statName}`}
      <div>{`Attempts: ${Math.round(totalAttempts)}`}</div>
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
