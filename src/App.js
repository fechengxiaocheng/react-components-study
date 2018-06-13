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
    console.log(current);
  }

  /**
   * Carousel 
   * @param {number} from 切之前的index
   * @param {number} to 当前选中的index
   */
  afterChange(from, to) {
    console.log(from, to);
  }

  render() {
    const carouselImgs = ['https://timgmb02.bdimg.com/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=b9598cd58ea68d36156b2be10d7dffa9&src=http%3A%2F%2Ft12.baidu.com%2Fit%2Fu%3D374257301%2C4194499844%26fm%3D175%26app%3D25%26f%3DJPEG%3Fw%3D626%26h%3D352%26s%3DBD7141951461C2E60C35DCD403003063','https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1145630236,29707647&fm=173&app=25&f=JPEG?w=218&h=146&s=272A6BA1508602F0488D2C1B0100C0D2','https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4023984964,2802831937&fm=173&app=25&f=JPEG?w=218&h=146&s=DF90618DC04377FD130207A503000002','https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2425622431,939860266&fm=173&app=25&f=JPEG?w=218&h=146&s=0F306D814F22369C1559E496030030C3']
    return (
      <div className="root">
        <Switch defaultChecked disabled={false} autoFocus checked={true} onChange={this.change} 
          checkedChildren="开" 
          unCheckedChildren="关"/>

        <Carousel beforeChange={this.beforeChange} afterChange={this.afterChange} autoPlay={false}>
          {
            carouselImgs.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} alt=""/>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    );
  }
}





export default App;
