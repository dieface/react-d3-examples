import React, { Component } from 'react';

import { radialLine, curveCardinalClosed } from 'd3-shape';

class RadialLine extends Component {
  render() {
    const {data} = this.props;

    const lineGenerator = radialLine()
      .curve(curveCardinalClosed)
      .angle(d => d.x)
      .radius(d => d.y);

    return (<path
      stroke={'steelblue'}
      fill={'none'}
      d={lineGenerator(data)}/>);
  }
};

export default RadialLine;
