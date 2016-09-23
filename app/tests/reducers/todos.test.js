import reducer from '../../reducers/todos';

describe('todos reducer', () => {
    it('should handle TOGGLE_TODO', () => {
        expect(
            reducer(
                {
                    items: [{id: 1, title: 'item', completed: false}],
                    isFetching: false
                },
                {
                    type: 'TOGGLE_TODO',
                    id: 1
                })
        ).toEqual(
            {
                items: [{id: 1, title: 'item', completed: true}],
                isFetching: false
            }
        );
    });
});
