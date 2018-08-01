import React, {Component} from 'react';
import Select from '../Components/Select/';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh'
}

export default class DefaultDemo extends Component {
  state = {
    value: null
  }

  onSelectItem = items => {
    this.setState({
      value: items.join(', ')
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
         multiple
         onChange={ this.onSelectItem }/>
      </div>
    );
  }
}
