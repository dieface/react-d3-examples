import React from 'react';
import { Line } from '../components/Shape';

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

const ShapeOnly = () => (
  <div>
    <div style={{ height: 500, width: 500, border: '2px solid lightgray' }}>
      <svg height={500} width={500}>
        <Line data={getDataLine()} />
      </svg>
    </div>
  </div>
);

export default ShapeOnly;
