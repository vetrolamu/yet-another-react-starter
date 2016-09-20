import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../header/header.jsx';

import './todd.scss';

export default class Page extends Component {
	render() {
		return (
			<div className="todd">
				<Header title="Todd" />
				<div>Hi, I am Todd</div>
				<img src="/assets/todd.png" />
				<br />
				<Link to="/">
					<button>Go to list</button>
				</Link>
			</div>
		);
	}
}
