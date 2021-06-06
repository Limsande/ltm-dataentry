import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {readEndpoint} from "redux-json-api";
import {FormattedMessage} from "react-intl";
import {ConstructionNotice} from "../../components/construction_notice";

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // fetch all data
        this.props.dispatch(readEndpoint('data'));
    }

    /**
     * Render the component
     */
    render() {
        return (
            /* TODO remove in production */
            <ConstructionNotice />
        );

        if (!this.props.data){
            // data not yet retrieved
            return <div><FormattedMessage id="view.message.loading" /></div>
        }

        let content;
        content = this.props.data.map((item) => {
            let path = '/data/' + item.idGlobal;
            return (
                <tr key={item.idGlobal}>
                    <td><Link to={path}>{item.attributes.idGlobal}</Link></td>
                    <td><Link to={path}>{item.attributes.surnameGiven}</Link></td>
                    <td><Link to={path}>{item.attributes.firstnameGiven}</Link></td>
                </tr>
            )
        });

        return (
            <div>
                <div className="grid-x grid-padding-x">
                    <h1 className="cell"><FormattedMessage id="data.index.title" /></h1>
                </div>
                <div className="grid-x grid-padding-x">
                    <section className="cell small-12 medium-9 large-auto">
                        <table>
                            <thead>
                                <tr>
                                    <th><FormattedMessage id="data.index.tableHeading.id" /></th>
                                    <th><FormattedMessage id="data.index.tableHeading.surname" /></th>
                                    <th><FormattedMessage id="data.index.tableHeading.firstname" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {content}
                            </tbody>
                        </table>
                    </section>
                </div>
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
