import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styles from './Greeter.css';

class ProductImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            loader: '/img/rocket.png'
        };
    }
    componentDidUpdate(prevProps) {
        if (! this.props.showImage && prevProps.viewport) {
            this.updatePosition();
        }
    }
    updatePosition() {
        var el = ReactDOM.findDOMNode(this);
        this.props.updateImagePosition(el.offsetTop, el.offsetHeight);
    }
    render() {
        var img = (this.props.showImage) ? this.props.src : this.state.loader;
        return (
            <img src={img} alt={this.props.alt} className={styles.lazy}/>
        );
    }
}
export  default ProductImage


