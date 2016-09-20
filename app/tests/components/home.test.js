import React from 'react';
import Header from '../../components/header/header.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Header title="Hello" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
