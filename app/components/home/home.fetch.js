import todosActions from '../../actions/todos';

export default function({store}) {
    return store.dispatch(todosActions.fetchTodos());
}
