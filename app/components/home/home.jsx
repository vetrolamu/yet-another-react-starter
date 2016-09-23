import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from '../header/header.jsx';
import todosActions from '../../actions/todos';

import './home.scss';

const Home = React.createClass({
    propTypes: {
        dispatch: React.PropTypes.func,
        todos: React.PropTypes.object
    },

    render() {
        const {todos: {items}, dispatch} = this.props;

        return (
            <div className="home">
                <Header title="Todd's todos" />
                <Link to="/page">Let's see Todd</Link>
                <table className="home__table">
                    <tbody>
                    {items.map(({id, completed, title}) => (
                        <tr key={id}>
                            <td>
                                <span style={completed ? {textDecoration: 'line-through'} : {}}>
                                    {title}
                                </span>
                            </td>
                            <td>
                                <button onClick={() => dispatch(todosActions.toggleTodo(id))}>
                                    Toggle
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br/>
            </div>
        );
    }
});

const mapStateToProps = ({todos}) => ({todos});

export default connect(mapStateToProps)(Home);
