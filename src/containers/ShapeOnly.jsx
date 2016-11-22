import React from 'react';
import { Line, Pie, RadialLine } from '../components/Shape';

const getDataLine = () => {
  const size = 500;
  const random = () => 500 * Math.random();

  const data = [
    {
      x: 0,
      y: random(),
    }, {
      x: random(),
      y: 0,
    }, {
      x: size,
      y: random(),
    }, {
      x: random(),
      y: size,
    },
  ];

  return data;
};

const getDataPie = () => {
  const data = [1, 1, 2, 3, 5, 8, 13, 21];
  return data;
};

const getDataRadialLine = () => {
  const n = 500;
  const data = Array.from({ length: n }, (d, i) => {
    const x = (2 * i * Math.PI) / n;
    const y = 120 + (40 * ((1 / 2) - Math.random()));

    return { x, y };
  });

  return data;
};

const calcCenter = () => (150 + (Math.random() * 200));

const getTransformCenter = () => `translate(${calcCenter()}, ${calcCenter()})`;

const ShapeOnly = () => (
  <div>
    <div style={{ height: 500, width: 500, border: '2px solid lightgray' }}>
      <svg height={500} width={500}>
        <Line data={getDataLine()} />

        <g transform={getTransformCenter()}>
          <Pie data={getDataPie()} />
          <RadialLine data={getDataRadialLine()} />
        </g>

      </svg>
    </div>
  </div>
);

export default ShapeOnly;
