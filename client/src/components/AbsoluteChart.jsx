import React from 'react';
import styled from 'styled-components';

const Chart = styled.div`
  background-color:${props => props.color};
  width:${props => props.width};
  height:${props => props.height}
  &:hover {
    background-color:blue;
  }
`;

const ChartContainer = ({ width, height }) => {
  console.log(width, height);
  return (
    <div>
      <asdf> helloo</asdf>"
      <Chart width="220px" height="230px" color="black">
        <Chart width={width} height={height} color="green">
          <Chart width="190px" height="200px" color="red">a</Chart>
          <Chart width="190px" height="100px" color="blue">b</Chart>
          <Chart width="190px" height="50px" color="orange">c</Chart>
          <Chart width="190px" height="50px" color="pink">d</Chart>
      </Chart>
      
      </Chart>
    </div>
)};

export default ChartContainer;
