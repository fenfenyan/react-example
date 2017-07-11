import React, {Component} from 'react';
import styles from './Greeter.css';//导入

class Foot extends Component{
    render() {
        return (
            <div className={styles.footerBox}>
                2014 北京酷睿奥思科技发展有限公司
            </div>
        );
    }
}

export  default Foot


