import React, {Component} from 'react';
import ProductImage from './ProductImage';

import styles from './Greeter.css';

class Product extends Component{
    constructor(...arg){
        super(...arg);
        this.state = {
            showImage: false
        };
    }
    componentWillMount() {  
        // allow image display override
        // if (this.props.showImage) {
        //     setShowImage(true);
        // }
    }
    updateImagePosition(top, height) { 
        // image is already displayed, no need to check anything
        if (this.state.showImage) {
            return;
        }
        // update showImage state if component element is in the viewport
        var min = this.props.viewport.top;
        var max = this.props.viewport.top + this.props.viewport.height;

        if ((min <= (top + height) && top <= (max - 10))) { 
            this.setShowImage(true);  
        }
    }
    setShowImage(show) {
        this.setState({
            showImage: !!(show)
        });
    }
    render() { 
        return (
            <li>
                <div className={styles.imageBox}>
                    <ProductImage src={this.props.image} alt={this.props.title} viewport={this.props.viewport} showImage={this.state.showImage}
                                  updateImagePosition={this.updateImagePosition.bind(this)} />
                </div>
            </li>
            
        );
    }
}
export  default Product


