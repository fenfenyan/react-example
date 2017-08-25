import React, {Component} from 'react';
import styles from './Greeter.css';//导入

class Greeter extends Component{
  render() {
    return (<div className={styles.headerBox}>
            <div className={[styles.titleBox,styles.pageTitle].join(" ")}>好奇心研究所</div>
            <div className={styles.titleBox}>
              <a href="smart.html" className={this.props.name=="smart"?"highlight":""}>智能</a>
              <a href="business.html" className={this.props.name=="smart"?"highlight":""}>商业</a>
              <a href="city.html" className={this.props.name=="smart"?"highlight":""}>城市</a>
              <a href="javascript:void(0)">设计</a>
              <a href="javascript:void(0)">文化</a>
            </div>
            
        </div>
        );
    }
}

export  default Greeter