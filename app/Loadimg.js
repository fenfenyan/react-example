import React, {Component} from 'react';
import Product from './Product';
import styles from './Greeter.css';
import { CSSTransitionGroup } from 'react-transition-group';

class Loadimg extends Component{
    render() {
        return (
            <div className={styles.contentBox}>
                <ul>
                    <li>
                         <div className={styles.imageBox}>
                            <img src="img/山1.jpg" className={styles.lazy}/>
                        </div>
                    </li>
                    <li>
                         <div className={styles.imageBox}>
                            <img src="img/山2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                         <div className={styles.imageBox}>
                            <img src="img/山3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/山4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                         <div className={styles.imageBox}>
                            <img src="img/山5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/山1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/山2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/山3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/山4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/山5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/树5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/霞5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                         <div className={styles.imageBox}>
                            <img src="img/鼠3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鼠5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟1.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟2.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟3.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟4.jpg" className={styles.lazy} />
                        </div>
                    </li>
                    <li>
                        <div className={styles.imageBox}>
                            <img src="img/鸟5.jpg" className={styles.lazy} />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

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


