import React from 'react';

import { line, curveCatmullRom } from 'd3-shape';

const Line = (props) => {
  const { data } = props;

  const lineGenerator = line()
    .curve(curveCatmullRom.alpha(0.5))
    .x(d => d.x)
    .y(d => d.y);

  return (
    <path
      stroke={'red'}
      fill={'none'}
      d={lineGenerator(data)}
    />
  );
};

Line.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
  })).isRequired,
};

export default Line;
