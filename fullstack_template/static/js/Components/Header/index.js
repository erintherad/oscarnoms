import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {
    render() {
        return (
            <h1>{this.props.header}</h1>
        );
    }
}

Header.propTypes = {
    header: PropTypes.string
}
