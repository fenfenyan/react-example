import React, {Component} from 'react';
import styles from './Greeter.css';//导入

class Foot extends Component{
    constructor(){
        super();
        this.state={
            display:"none"
        }
    }
    
    render() {
        return (
            <div className={styles.footerBox}>
                技术栈：webpack+react+react-router+ES6
                <a href="https://github.com/fenfenyan">颜芬的github</a>
            </div>
        );
    }
}

export  default Foot


