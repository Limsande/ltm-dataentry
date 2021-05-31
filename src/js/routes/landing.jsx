import React from "react";
import {FormattedMessage} from "react-intl";

export default class LandingPage extends React.Component {
    render () {
        return <h1><FormattedMessage id="landing.title" /></h1>
    }
}