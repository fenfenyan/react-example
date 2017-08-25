import React, {Component} from 'react';

import styles from './Greeter.css';//导入

class Totop extends Component{
    constructor(...args){
        super(...args);
        this.state = {
            className:'none'
        }
    }
    handleClick() {
        window.scrollTo(0,0);

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(e) {
        var scrollHeiht=document.body.scrollTop;
        this.setState({
            className:scrollHeiht>400?styles.toTop:styles.toTopDis
        });
    }
    render() {
        return (
            <div>
                <div className={this.state.className}  onClick={(e) => this.handleClick(e)}>
                    <img alt="滑到页面顶部" style={{width:"80px",height:"80px"}} src="/img/rocket.png" />
                </div>
            </div>
        );
    }
}
export  default Totop