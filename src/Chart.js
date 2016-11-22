import React from 'react';

class Chart extends React.Component {

  displayName: 'Chart'

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    )
  }
}

export default Chart;