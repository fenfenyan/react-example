import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter';
import ProductList from './Loadimg';
import Totop from './Totop';
import Foot from './foot';

import './main.css';

ReactDOM.render(<Greeter name="main" />, document.getElementById('header'));

var items = [
    { title: '1', image: 'img/山1.jpg' },
    { title: '2', image: 'img/山2.jpg' },
    { title: '3', image: 'img/山3.jpg' },
    { title: '4', image: 'img/山4.jpg' },
    { title: '5', image: 'img/山5.jpg' },
    { title: '11', image: 'img/树1.jpg' },
    { title: '12', image: 'img/树2.jpg' },
    { title: '13', image: 'img/树3.jpg' },
    { title: '14', image: 'img/树4.jpg' },
    { title: '15', image: 'img/树5.jpg' },
    { title: '21', image: 'img/鼠1.jpg' },
    { title: '22', image: 'img/鼠2.jpg' },
    { title: '23', image: 'img/鼠3.jpg' },
    { title: '24', image: 'img/鼠4.jpg' },
    { title: '25', image: 'img/鼠5.jpg' },
    { title: '31', image: 'img/山1.jpg' },
    { title: '32', image: 'img/山2.jpg' },
    { title: '33', image: 'img/山3.jpg' },
    { title: '34', image: 'img/山4.jpg' },
    { title: '35', image: 'img/山5.jpg' },
    { title: '41', image: 'img/树1.jpg' },
    { title: '42', image: 'img/树2.jpg' },
    { title: '43', image: 'img/树3.jpg' },
    { title: '44', image: 'img/树4.jpg' },
    { title: '45', image: 'img/树5.jpg' },
    { title: '51', image: 'img/鼠1.jpg' },
    { title: '52', image: 'img/鼠2.jpg' },
    { title: '53', image: 'img/鼠3.jpg' },
    { title: '54', image: 'img/鼠4.jpg' },
    { title: '55', image: 'img/鼠5.jpg' },
    { title: '61', image: 'img/鹿1.jpg' },
    { title: '62', image: 'img/鹿2.jpg' },
    { title: '63', image: 'img/鹿3.jpg' },
    { title: '64', image: 'img/鹿4.jpg' },
    { title: '65', image: 'img/鹿5.jpg' },
    { title: '71', image: 'img/鸟1.jpg' },
    { title: '72', image: 'img/鸟2.jpg' },
    { title: '73', image: 'img/鸟3.jpg' },
    { title: '74', image: 'img/鸟4.jpg' },
    { title: '75', image: 'img/鸟5.jpg' }
];
ReactDOM.render(<ProductList items={items} />, document.getElementById('content'));

ReactDOM.render(<Foot />, document.getElementById('foot'));

ReactDOM.render(<Totop/>, document.getElementById('totop'));
