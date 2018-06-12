import React, { Component } from 'react';
import './App.css';
import Switch from './components/Switch/index';
import Carousel from './components/Carousel/index';

class App extends Component {
  /**
   * Switch
   * @param {boolean} v checked值，true/false
   */
  change(v) {
    console.log(v);
  }
  /**
   * Carousel 
   * @param {number} current 当前选中的index
   */
  beforeChange(current) {
    //console.log(current);
  }

  /**
   * Carousel 
   * @param {number} from 切之前的index
   * @param {number} to 当前选中的index
   */
  afterChange(from, to) {
    //console.log(from, to);
  }

  render() {
    return (
      <div className="root">
        <Switch defaultChecked disabled={false} autoFocus checked={true} onChange={this.change} 
          checkedChildren="开" 
          unCheckedChildren="关"/>
        <Carousel beforeChange={this.beforeChange} afterChange={this.afterChange} autoPlay={false}>
          <div><h1>1</h1></div>
          <div><h1>2</h1></div>
          <div><h1>3</h1></div>
          <div><h1>4</h1></div>
        </Carousel>
      </div>
    );
  }
}





export default App;
