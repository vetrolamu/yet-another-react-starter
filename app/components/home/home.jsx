import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from '../header/header.jsx';
import { toggleTodo } from '../../actions/todos';

import './home.scss';

const Home = ({dispatch, todos}) => (
    <div className="home">
        <Header title="Home" />
        <div>This is home</div>
        <br />
        {todos.map(({id, checked, text}) => (
            <div key={id}>
                <span style={checked ? {textDecoration: 'line-through'} : {}}>
                    {text}
                </span>
                <button onClick={() => dispatch(toggleTodo(id))}>
                    Toggle
                </button>
            </div>
        ))}
        <br/>
        <Link to="/page">
            <button>Let's see Todd</button>
        </Link>
    </div>
);

Home.propTypes = {
    dispatch: React.PropTypes.func,
    todos: React.PropTypes.array
};

const mapStateToProps = ({todos}) => ({todos});

export default connect(mapStateToProps)(Home);
