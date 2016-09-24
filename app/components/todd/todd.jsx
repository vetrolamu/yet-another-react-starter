import React from 'react';
import { Link } from 'react-router';

import Header from '../header/header.jsx';

import './todd.scss';

const Page = () => (
    <div className="todd">
        <Header title="Todd" />
        <div>Hi, I am Todd. Look at <Link to="/">my todos</Link></div>
        <img src="./todd.png" width="200" />
        <br />
    </div>
);

export default Page;
