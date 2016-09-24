import React from 'react';
import Header from '../../components/todd/todd.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Header title="Hello" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
