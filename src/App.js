import React, { Component } from 'react';
import './App.css';
import Switch from './components/Switch/Switch';


class App extends Component {
  change(v) {
    console.log(v);
  }
  render() {
    return (
      <div className="root">
        <Switch defaultChecked disabled={false} autoFocus checked={true} onChange={this.change} 
          checkedChildren="开" 
          unCheckedChildren="关"/>
      </div>
    );
  }
}





export default App;
