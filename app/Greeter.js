import React, {Component} from 'react';
import { browserHistory, hashHistory, BrowserRouter, Route, Switch,Link,NavLink } from 'react-router-dom';
import styles from './Greeter.css';//导入


import Smart from './smart';
import Business from './business';
import City from './city';


class Greeter extends Component{
  render() {
    return (
        <div>
            <div className={styles.headerBox}>
                <div className={[styles.titleBox,styles.pageTitle].join(" ")}>颜芬的作品</div>
                    <div className={styles.titleBox}>
                        <ul role="nav">
                            <li><NavLink to="/smart" activeClassName={styles.highlight}>图片懒加载</NavLink></li>
                            <li><NavLink to="/business" activeClassName={styles.highlight}>商业</NavLink></li>
                            <li><NavLink to="/city" activeClassName={styles.highlight}>城市</NavLink></li>
                        </ul>

                    </div>
            </div>
            {this.props.children}
        </div>
        );
    }
}

export  default Greeter