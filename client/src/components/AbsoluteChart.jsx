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
    background-color:blue;
  }
  border: 1px solid black;
`;

const ChartContainer = ({ width, height, data }) => {
  let total = data.reduce((sum, player) => player.amount + sum, 0);
  console.log(width, height);
  return (
    <div>
      <asdf> helloo</asdf>"
      <Chart width={`${width}px`} height={`${height}px`} >
        {data.map(player => makeChart(width, height, total, player.amount, player.name))}  
      </Chart>
    </div>
)};

function makeChart(overallWidth, overallHeight, total, value, name) {
  console.log('amount', value);
  return <Player 
          width={`${overallWidth * 0.9}px`} 
          height={`${overallHeight * value/total - 2}px`}
        >
          {name}
        </Player>
}
export default ChartContainer;
