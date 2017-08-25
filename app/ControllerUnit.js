import React, {Component} from 'react';
import styles from './Greeter.css';//导入

class ControllerUnit extends Component{
    handleClick(e){
        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }
    render() {
        var controllerUniteClassName=styles.controllerUnit;
        if(this.props.arrange.isCenter){
            controllerUniteClassName=[styles.controllerUnit,styles.isCenter].join(" ");
            if(this.props.arrange.isInverse){
                controllerUniteClassName=[styles.controllerUnit,styles.isCenter,styles.isInverse].join(" ");
            }
        }
        return (
            <span className={controllerUniteClassName} onClick={this.handleClick.bind(this)}></span>
        );
    }
}

export  default ControllerUnit


