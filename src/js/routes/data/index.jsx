import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
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
        let content;
        if(this.props.data && this.props.data.length > 0) {
            content = this.props.data.data_items.map((data_item) => {
                let key = 'entry-' + data_item.id;
                let path = '/data/' + data_item.id;
                return (
                    <div>
                        <Link to={path}>{data_item.attributes.idGlobal}</Link>
                        <Link to={path}>{data_item.attributes.surnameGiven}</Link>
                    </div>
                )
            });
        } else {
            content = <h1>Nothing to see here</h1>;
        }
        return (
            <div>
                {content}
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (state.api && state.api.data) {
        return {
            data: state.api.data
        }
    } else {
        return {
            data: {
                data_items: []
            }
        };
    }
}

export default connect(mapStateToProps)(Index);
