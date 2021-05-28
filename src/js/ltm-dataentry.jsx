import React from 'react';
import ReactDOM from 'react-dom';

export default class LtmDataentry extends React.Component {
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

ReactDOM.render(<LtmDataentry/>, document.getElementById('app-entry-point'));
