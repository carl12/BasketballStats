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
      total,
      value,
      name
    } = this.props;
    const { hovered } = this.state;
    return (
      <Player
        width={`${overallWidth  }px`}
        height={`${overallHeight * value / total - 2}px`}
        onMouseEnter={this.onHover}
        onMouseOut={this.offHover}
        onBlur={this.offHover}
      >
        {name}
        {hovered && `: ${value}`}
      </Player>
    );
  }
}

const ChartContainer = ({ width, height, data, teamName, statName }) => {
  const total = data.reduce((sum, player) => player.amount + sum, 0);
  return (
    <div>
      {`${teamName}: ${total.toFixed(2)} ${statName}`}
      <Chart width={`${width}px`} height={`${height}px`}>
        {data.map(player => (
          <PlayerEntry
            overallWidth={width}
            overallHeight={height}
            total={total}
            value={player.amount}
            name={player.name}
          />
        ))}
      </Chart>
    </div>
  )
};


export default ChartContainer;
