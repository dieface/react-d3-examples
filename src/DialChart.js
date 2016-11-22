import React from "react";
import ReactDOM from "react-dom";
import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";

const startAngle = -1 * Math.PI / 3; // - 60deg
const endAngle = Math.PI / 3; // 60deg

//Create an arc path for dial
const dial = arc()
            .startAngle(startAngle)
            .endAngle(endAngle)
            .innerRadius(80)
            .outerRadius(145);

//Create a scale for using with arc
const scale = scaleLinear()
                .domain([0, 100]) // Adjust the values according to your data
                .range([startAngle, endAngle]);

const DialChart = React.createClass({
    render() {
        const width = 300,
            height = 300,
            transform = `translate(${width * 0.5},${0.65 * height})`,
            current = (x) => dial.endAngle(scale(x))(); // get arc path for given value

        return (
            <svg viewBox={`0 0 ${width} ${height}`}>
                <path fill="#dddddd" d={dial()} transform={transform}/>
                <path fill="#f44336" d={current(this.props.fill)} transform={transform}/>
            </svg>
        );
    }
});

export default DialChart