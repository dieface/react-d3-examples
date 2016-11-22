import React, { Component } from 'react';
import { Line, Pie, RadialLine } from '../components/Shape';

function getDataLine() {
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
}

function getDataPie() {
  const data = [1, 1, 2, 3, 5, 8, 13, 21];
  return data;
}

function getDataRadialLine() {
  const n = 500;
  const data = Array.from({ length: n }, (d, i) => {
    const x = (2 * i * Math.PI) / n;
    const y = 120 + (40 * ((1 / 2) - Math.random()));

    return { x, y };
  });

  return data;
}

function calcCenter() {
  return (150 + (Math.random() * 200));
}

function getTransformCenter() {
  return `translate(${calcCenter()}, ${calcCenter()})`;
}

function RenderShapeOnly() {
  return (
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
}

class ShapeOnly extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => { this.forceUpdate(); }}
        >
          Produce some new random data (not animated)
        </button>

        <RenderShapeOnly />
      </div>
    );
  }
}

export default ShapeOnly;
