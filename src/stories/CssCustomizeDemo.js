import React, { Component } from 'react';
import Select from '../Components/Select/';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh'
}

const selectStyle = {
  width: '400px',
  height: '55px',
  boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  backgroundColor: '#fff',
  borderRadius: '5px',
  paddingLeft: '10px'
}

const imageStyle = {
  width: '30px',
  height: '30px'
}

const Image = () =>
  <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD4SURBVGhD7ZLBrQIxDAX3Qgu0AR1CZVwoAOrhAn4IIx9iZZ1kk6z0Rhoh/oE8a/5CCCGEEEIIIRNy/H3ORNGmm3gRD99vY8EGbMGmMHfxLT7EE/4wCLyNDdiCTWH0EPgSe9fRCnhbd1QfovaqYytYmx0Ct6yTqmBteojauo5XwbrJIbBFnVwF62aHqKV11lSwFh1yFp9i6gdTRupEKqjYgk1F4MGrGHkwVydaAW9jQ82/758WdbpX8KipM7SCR0md4RU8Surk7FLBI1rHs2sFj5o6Qyt4ROtMUcFjTZ0pK3h4daau4GHr7KqCBwrsrgIhhBBCCFGW5QOZUzeWPDSKegAAAABJRU5ErkJggg=="
  style={imageStyle}
/>



export default class CssCustomizeDemo extends Component {
  state = {
    value: null
  }

  onSelectItem = item => {
    this.setState({
      value: item
    })
  }

  render() {
    const { items } = this.props;
    const { value } = this.state;
    return (
      <div style={style}>
       <Select
         style={selectStyle}
         items={items}
         value={ value }
         onChange={ this.onSelectItem }
         iconComponent={ Image }
       />
      </div>
    )
  }
}
