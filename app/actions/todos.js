import * as constants from '../constants/todos';

const toggleTodo = (id) =>
    ({type: constants.TOGGLE_TODO, id});

export {toggleTodo};
