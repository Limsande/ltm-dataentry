import React from 'react';
import { connect } from 'react-redux';
import { readEndpoint } from 'redux-json-api';

class View extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(readEndpoint('data/' + this.props.match.params.mid))
    }

    /**
     * Render the component
     */
    render() {
        return <h1>Values of this data</h1>
    }
}

function mapStateToProps(state) {
    return null
}

export default connect(mapStateToProps)(View);