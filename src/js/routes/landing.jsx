import React from "react";
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

export default class LandingPage extends React.Component {
    render () {
        return (
            <main className="grid-container-x">
                {/*<h1><FormattedMessage id="landing.title" /></h1>*/}

                <h2><FormattedMessage id="landing.aboutLTM.heading" /></h2>
                <div className="blockquote-container">
                    <div className="callout2">
                        <h4 className="blockquote-title">
                            <a href="https://www.timemachine.eu/about-us/">timemachnine.eu:</a>
                        </h4>
                        <blockquote>
                            <p className="blockquote-content">
                                <FormattedMessage id="landing.aboutTimeMachine.text" />
                            </p>
                        </blockquote>
                    </div>
                    <div className="callout2">
                        <h4 className="blockquote-title">
                            <a href="https://www.timemachine.eu/the-time-machine-leipzig/">The Leipzig Time Machine:</a>
                        </h4>
                        <blockquote>
                            <p className="blockquote-content">
                                <FormattedMessage id="landing.aboutLTM.text" />
                            </p>
                        </blockquote>
                    </div>
                </div>

                <h2><FormattedMessage id="landing.about.heading" /></h2>
                <p><FormattedMessage id="landing.about.text.p1" /></p>
                <p><FormattedMessage
                    id="landing.about.text.p2"
                    values={{ e: chunks => (<e>{chunks}</e>) }}/></p>
            </main>
        )
    }
}