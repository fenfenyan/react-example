import React, {Component} from 'react';
import Product from './Product';
import styles from './Greeter.css';

class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewport: {
                top: 0,
                height: 0
            }
        };
        this._updateViewport=this.updateViewport.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this._updateViewport, false);
        window.addEventListener('resize', this._updateViewport, false);
        this.updateViewport();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._updateViewport);
        window.removeEventListener('resize', this._updateViewport);
    }
    updateViewport() {
        this.setState({
            viewport: {
                top: window.pageYOffset,
                height: window.innerHeight
            }
        });
    }
    render() {
        var self = this; 
        var itemViews = this.props.items.map(function(item) {
            return <Product title={item.title} key={item.title} image={item.image} viewport={self.state.viewport} />
        });
        return (
            <ul className={styles.contentBox}>
                {itemViews}
            </ul>
        );
    }
}
export  default ProductList


