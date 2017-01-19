import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from '../header/header.jsx';
import todosActions from '../../actions/todos';

import { Root, Table } from './home.styles';

const Home = React.createClass({
    propTypes: {
        dispatch: React.PropTypes.func,
        todos: React.PropTypes.object
    },

    render() {
        const {todos: {items}, dispatch} = this.props;

        return (
            <Root>
                <Header title="Todd's todos" />
                <Link to="/page">Let's see Todd</Link>
                <Table>
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
                </Table>
                <br/>
            </Root>
        );
    }
});

const mapStateToProps = ({todos}) => ({todos});

export default connect(mapStateToProps)(Home);
