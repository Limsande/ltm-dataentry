import React from 'react';
import { connect } from 'react-redux';
import { readEndpoint, updateResource } from 'redux-json-api';
import { Link, Redirect } from "react-router-dom";
import {FormattedMessage} from "react-intl";

/**
 * Lets a logged in user edit a data item by entering text into the source attribute.
 */
class Edit extends React.Component {

    /**
     * @param props
     *  - location.loggedIn Whether the user is logged in
     */
    constructor(props) {
        super(props);

        this.state = {
            input: null,
            updated: false,
            loggedIn: this.props.location.loggedIn
        }
    }

    componentDidMount() {
        // fetch data item
        this.props.dispatch(readEndpoint('data/' + this.props.match.params.mid));
    }

    useInput = (ev) => {
        this.setState({
            input: ev.target.value
        });
    }

    doUpdate = (ev) => {
        ev.preventDefault();
        let component = this;
        let id = this.props.match.params.mid;
        let item = this.props.data[id];
        let input = this.state.input || item.attributes.source;
        this.props.dispatch(updateResource({
            type: 'data',
            id: id,
            attributes: {
                source: input
            }
        })).then((data) => {
            component.setState({
                updated: true
            });
        });
    }

    /**
     * Render the component
     */
    render() {
        // Redirect to login page, if the user is not logged in
        if (!this.state.loggedIn) {
            const loginURL = {
                pathname: "/login",
                redirectTo: document.location.pathname
            };

            return <Redirect to={loginURL} />
        }

        // Redirect to item's detail page when we're done here
        if(this.state.updated) {
            let path = '/data/' + this.props.match.params.mid;
            return <Redirect to={path}/>
        }

        if (!this.props.data){
            // data not yet retrieved
            return <div><FormattedMessage id="view.message.loading" /></div>
        }

        let id = this.props.match.params.mid;
        if (!this.props.data[id]){
            // no data item with this ID
            return <div><FormattedMessage id="view.message.notFound" /></div>
        }

        let item = this.props.data[id];
        let input = this.state.input || item.attributes.source;
        let abortPath = '/data/' + item.id;
        return (
            <div>
                <div className="grid-x grid-padding-x">
                    <h1 className="cell">
                        <FormattedMessage id="edit.title" values={{item: item.attributes.idGlobal}} />
                    </h1>
                </div>
                <form className="grid-x grid-padding-x" onSubmit={this.doUpdate}>
                    <div className="cell large-4">
                        <label><FormattedMessage id="edit.input.label" />
                            <textarea value={input} onChange={this.useInput}/>
                        </label>
                        <div className="text-right">
                            <Link to={abortPath} className="secondary button">
                                <FormattedMessage id="edit.cancelButton" />
                            </Link>
                            <button className="button">
                                <FormattedMessage id="edit.confirmationButton" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let props = {
        modules: null,
        users: null
    }
    if (state.api && state.api.modules) {
        props.modules = {};
        state.api.modules.data.forEach((module) => {
            props.modules[module.id] = module;
        });
    }
    if (state.api && state.api.users) {
        props.users = {};
        state.api.users.data.forEach((user) => {
            props.users[user.id] = user;
        });
    }
    return props;
}

export default connect(mapStateToProps)(Edit);

