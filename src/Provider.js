import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      trafficLights: {
        color: 'red',
      },
    }
    this.handleCars = this.handleCars.bind(this);
    this.handleTraficLights = this.handleTraficLights.bind(this);
  }

  handleCars(car, move) {
    this.setState({
      cars: {
      ...this.state.cars,
      [car]: move,
    },
    });
  }

  handleTraficLights(color) {
    this.setState({
      trafficLights: {
        ...this.state.trafficLights,
        color,
      },
    });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.handleCars,
      changeSignal: this.handleTraficLights,
    }

    const { children } = this.props;
    return (
      <Context.Provider value={context}>
        { children }
      </Context.Provider>
    )
  }
}

Provider.propTypes = ({
  children: PropTypes.node,
}).isRequired;