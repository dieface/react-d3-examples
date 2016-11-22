import React, { Component } from 'react';

import { pie, arc } from 'd3-shape';
import { interpolateLab as lab } from 'd3-interpolate';

class Pie extends Component {
  render() {
    const { data } = this.props;
    const arcs = pie()(data);

    const arcGen = arc()
      .innerRadius(0)
      .outerRadius(100);

    const col = lab('darkgray', 'yellow');

    return (<g>
      {arcs.map((a, i) => {
        const ratio = Math.abs(a.startAngle - a.endAngle) / 2 / Math.PI;
        return (<path
          key={'arc' + i}
          fill={col(ratio)}
          stroke={'white'}
          d={arcGen(a)}/>);
      })}
    </g>);
  }
};

export default Pie;
