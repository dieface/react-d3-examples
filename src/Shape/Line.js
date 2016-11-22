import React, { Component } from 'react';

import { line, curveCatmullRom } from 'd3-shape';

class Line extends Component {
  render() {
    const { data } = this.props;

    const lineGenerator = line()
      .curve(curveCatmullRom.alpha(0.5))
      .x(d => d.x)
      .y(d => d.y)

    return (<path stroke={'red'} fill={'none'}
                  d={lineGenerator(data)}/>);
  }
};

export default Line;
