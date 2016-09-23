import * as constants from '../constants/todos';
import fetch from 'isomorphic-fetch';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const toggleTodo = (id) =>
    ({type: constants.TOGGLE_TODO, id});

const requestTodos = () =>
    ({type: constants.REQUEST_TODOS});

const receiveTodos = (items) =>
    ({type: constants.RECEIVE_TODOS, items});

function fetchTodos() {
    return dispatch => {
        dispatch(requestTodos());
        return fetch(TODOS_URL)
            .then(response => response.json())
            .then(items => dispatch(receiveTodos(items)));
    };
}

export default {toggleTodo, fetchTodos};
