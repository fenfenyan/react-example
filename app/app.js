
import React, {Component} from 'react';
import styles from './Greeter.css';//导入

class App extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (<div className={styles.titleBox}>
            <ul role="nav">
                <li><Link to="/">智能</Link></li>
                <li><Link to="/business">商业</Link></li>
                <li><Link to="/city">城市</Link></li>
            </ul>
        </div>)
    }
}
export  default App