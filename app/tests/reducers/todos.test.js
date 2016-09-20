import reducer from '../../reducers/todos'

describe('todos reducer', () => {
    it('should handle TOGGLE_TODO', () => {
        expect(
            reducer([{id: 1, text: 'item', checked: false}], {
                type: 'TOGGLE_TODO',
                id: 1
            })
        ).toEqual(
            [{id: 1, text: 'item', checked: true}]
        );
    })
});
