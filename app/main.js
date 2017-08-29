import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, browserHistory,IndexRoute} from 'react-router-dom'

import Greeter from './Greeter';
import Totop from './Totop';
import Foot from './foot';
import ProductList from './Loadimg';
// import PhotoGallary from './PhotoGallary';


import Smart from './smart';
import Business from './business';
import City from './city';


import './main.css';

// ReactDOM.render(<Greeter name="main" />, document.getElementById('header'));


ReactDOM.render((
    <BrowserRouter>
        <Greeter>
            <Route  exact path="/" component={ Smart }/>
            <Route  path="/smart" component={ Smart }/>
            <Route  path="/business" component={ Business }/>
            <Route  path="/city" component={ City } />
        </Greeter>
    </BrowserRouter>
), document.getElementById('content'));


// ReactDOM.render(<ProductList items={items} />, document.getElementById('content'));

ReactDOM.render(<Foot />, document.getElementById('foot'));

ReactDOM.render(<Totop/>, document.getElementById('totop'));



// ReactDOM.render(<PhotoGallary/>, document.getElementById('photoGallary'));

