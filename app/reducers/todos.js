import * as constants from '../constants/todos';

const initialState = {
    items: [],
    isFetching: false,
    didInvalidate: false
};

export default (state=initialState, action) => {
    switch (action.type) {
        case constants.TOGGLE_TODO:
            const items = state.items.map((todo) => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }

                return {...todo};
            });

            return {...state, items};

        case constants.REQUEST_TODOS:
            return {...state, isFetching: true};

        case constants.RECEIVE_TODOS:
            return {...state, isFetching: false, items: action.items};

        default:
            return state;
    }
};
