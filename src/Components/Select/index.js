import React, { Component } from 'react';
import ValueComponent from './DefaultValueComponent'
import ArrowIcon from './ArrowIcon';

import './style.css';

export default class Select extends Component{
  static defaultProps = {
    valueComponent: ValueComponent,
  }
  render(){
    const { style, value, valueComponent } = this.props;
    return (
      <div className="mui-select-root">
        <div className="mui-select-value">
          <ValueComponent value={value} />
        </div>
        <button className="mui-select-button">
          <ArrowIcon/>
        </button>
      </div>
    )
  }
}
