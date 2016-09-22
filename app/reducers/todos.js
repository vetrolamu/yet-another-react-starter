import * as constants from '../constants/todos';

const initialState = [
    {id: 1, text: 'Item 1', checked: false},
    {id: 2, text: 'Item 2', checked: false},
    {id: 3, text: 'Item 3', checked: false}
];

export default (state=initialState, action) => {
    switch (action.type) {
        case constants.TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            });
        default:
            return state;
    }
};
