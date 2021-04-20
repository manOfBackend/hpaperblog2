import React, { Component } from 'react';

class Try extends Component {
    render() {
        const { tryInfo } = this.props;

        return (
            <li>
                <ul>{tryInfo.try}</ul>
                <ul>{tryInfo.result}</ul>
            </li>
        );
    }
}

export default Try;
