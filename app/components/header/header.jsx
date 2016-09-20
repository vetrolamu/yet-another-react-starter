import React from 'react';

const Header = (props) => (
    <h1 {...props}>{props.title}</h1>
);

Header.propTypes = {
    title: React.PropTypes.string
};

export default Header;
