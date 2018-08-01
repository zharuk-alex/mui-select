import React, {Component} from 'react';
import AtachMoneyIcon from 'material-ui-icons/AttachMoney'

import Select from '../Components/Select/';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh'
}

const iconStyle = {
  paddingRight: '10px',
}

const valueStyles = {
  display: 'flex',
  alignSelf: 'center'
}

const ValueComponent = ({ value }) => (
  <div style={valueStyles} >
    <AtachMoneyIcon style={iconStyle} />
    <span>{value}</span>
  </div>
)

export default class DefaultDemo extends Component {
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
         items={items}
         value={ value }
         onChange={ this.onSelectItem }
         valueComponent={ ValueComponent }
       />
      </div>
    );
  }
}
