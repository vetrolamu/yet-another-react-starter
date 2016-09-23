import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../header/header.jsx';

import './todd.scss';

export default class Page extends Component {
    render() {
        return (
            <div className="todd">
                <Header title="Todd" />
                <div>Hi, I am Todd. Look at <Link to="/">my todos</Link></div>
                <img src="/assets/todd.png" width="200" />
                <br />
            </div>
        );
    }
}
