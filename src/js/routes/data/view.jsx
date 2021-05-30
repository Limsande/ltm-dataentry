import React from 'react';
import { connect } from 'react-redux';
import { readEndpoint } from 'redux-json-api';
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

/**
 * Displays a table with all (attribute, value) pairs of given data item.
 */
class View extends React.Component {

    /**
     * @param props
     *  - location.loggedIn Whether the user is logged in
     */
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: this.props.location.loggedIn
        };
    }

    componentDidMount() {
        // fetch data item
        this.props.dispatch(readEndpoint('data/' + this.props.match.params.mid))
    }

    /**
     * Render the component
     */
    render() {
        if (!this.props.data) {
            // data not yet retrieved
            return <div><FormattedMessage id="view.message.loading"/></div>;
        }

        let id = this.props.match.params.mid
        if (!this.props.data[id]){
            // no data item with this ID
            return <div><FormattedMessage id="view.message.notFound" /></div>
        }

        let item = this.props.data[this.props.match.params.mid];
        let editPath = '/data/' + item.id + '/edit';

        /*
         * Display buttons to edit this data item, if user is logged in. Display link to
         * login page, otherwise.
         */
        let editButtons;
        if (!this.state.loggedIn) {
            const loginURL = {
                pathname: "/login",
                redirectTo: document.location.pathname
            };

            editButtons = <Link to={loginURL}><FormattedMessage id="view.button.loginToEdit" /></Link>;
        } else {
            editButtons = (
                <div>
                    <Link to={editPath} className="button">
                        <FormattedMessage id="view.button.proposeChange" />
                    </Link>
                    <Link to={editPath} className="button">
                        <FormattedMessage id="view.button.proposeChange" />
                    </Link>
                </div>
            );
        }

        /*
         * Render data as table of (attribute, value) pairs.
         */
        return (
            <div>
                <main className="grid-container">
                    <div className="grid-x grid-padding-x">
                        {editButtons}
                        <div className="cell">
                            <h1>{item.attributes.surnameGiven}, {item.attributes.firstnameGiven}</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th><FormattedMessage id="view.tableHeading.attribute" /></th>
                                        <th><FormattedMessage id="view.tableHeading.value" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.attributes.map((attr, i) => <tr key={i}><td>attr</td><td>item.attributes.attr</td></tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let props = {
        data: null
    }
    if (state.api && state.api.data) {
        props.data = {};
        state.api.data.data_items.forEach((data_item) => {
            props.data[data_item.id] = data_item;
        });
    }
    return props;
}

export default connect(mapStateToProps)(View);