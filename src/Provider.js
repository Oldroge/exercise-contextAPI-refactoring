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
    }
    }
    this.handleCars = this.handleCars.bind(this);
  }

  handleCars(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
      [car]: side,
    },
    });
  }

  render() {
    const context  = {
      ...this.state,
      moveCar: this.handleCars,
    };

    const { children } = this.props;
    return (
      <Context.Provider value={context}>
        { children }
      </Context.Provider>
    );
  }
}

Provider.propTypes = ({
  children: PropTypes.node,
}).isRequired;