import React from 'react';
import { connect } from 'react-redux';
import {readEndpoint} from "redux-json-api";

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(readEndpoint('data'));
    }

    /**
     * Render the component
     */
    render() {
        return <h1>List of data</h1>
    }
}

function mapStateToProps(state) {
    return null
}

export default connect(mapStateToProps)(Index);
