import React from 'react';
import { connect } from 'react-redux';
import { readEndpoint } from 'redux-json-api';
import {Link} from "react-router-dom";

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

        const loginURL = {
            pathname: "/login",
            redirectTo: document.location.pathname
        };

        return (
            <div>
                <h1>Values of this data</h1>

                {/* link to login
                * see (https://reacttraining.com/react-router/web/api/location) */}
                <Link to={loginURL}>Login to edit</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return null
}

export default connect(mapStateToProps)(View);