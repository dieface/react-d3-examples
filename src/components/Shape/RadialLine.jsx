import React from 'react';
import { radialLine, curveCardinalClosed } from 'd3-shape';

function RadialLine(props) {
  const { data } = props;

  const lineGenerator = radialLine()
    .curve(curveCardinalClosed)
    .angle(d => d.x)
    .radius(d => d.y);

  return (
    <path
      stroke={'steelblue'}
      fill={'none'}
      d={lineGenerator(data)}
    />
  );
}

RadialLine.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
  })).isRequired,
};

export default RadialLine;
