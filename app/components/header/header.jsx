import Helmet from 'react-helmet';
import React from 'react';

const Header = (props) => (
    <h1 {...props}>
        <Helmet title={props.title} />
        {props.title}
    </h1>
);

Header.propTypes = {
    title: React.PropTypes.string
};

export default Header;
