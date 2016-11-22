import React from 'react';
import { pie, arc } from 'd3-shape';
import { interpolateLab as lab } from 'd3-interpolate';

function Pie(props) {
  const { data } = props;
  const arcs = pie()(data);
  const col = lab('darkgray', 'yellow');

  const arcGen = arc()
    .innerRadius(0)
    .outerRadius(100);

  return (
    <g>
      {arcs.map((a, i) => {
        const ratio = Math.abs(a.startAngle - a.endAngle) / 2 / Math.PI;

        return (
          <path
            key={`arc${i}`}
            fill={col(ratio)}
            stroke={'white'}
            d={arcGen(a)}
          />
        );
      })}
    </g>
  );
}

Pie.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.number.isRequired).isRequired,
};

export default Pie;
