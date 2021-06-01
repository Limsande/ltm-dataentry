import React from "react";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {getTranslationsForCurrentLocale} from "../common";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            loginValid: true,
            loggedIn: false
        }
    }

    updateEmail = (ev) => {
        this.setState({
            email: ev.target.value
        });
    }

    handleLogin = (ev) => {
        ev.preventDefault();
        if (this.state.email === 'test@example.com') {
            this.setState({
                loginValid: true,
                loggedIn: true
            });
        } else {
            this.setState({
                loginValid: false
            });
        }
    }

    /**
     * Render the component
     */
    render() {
        if (this.state.loggedIn){
            return <h2><FormattedMessage id="login.message.alreadyLoggedIn" /></h2>
        }

        let errorTag = null;
        let errorLabel = null;
        let errorInput = null;
        if (!this.state.loginValid) {
            errorTag = (
                <span className="form-error is-visible">
                    <FormattedMessage id="login.message.noSuchEmail" values={{ email:this.state.email }} />
                </span>
            );
            errorLabel = 'is-invalid-label';
            errorInput = 'is-invalid-input';
        }
        return (
            <main className="grid-container-x small callout">
                <h1><FormattedMessage id="login.title" /></h1>
                <form onSubmit={this.handleLogin}>
                    <div>
                        <label className={errorLabel}>
                            <FormattedMessage id="login.email.label" />
                            <input
                                type="email" name="email" tabIndex="1" required="required" value={this.state.email}
                                placeholder={getTranslationsForCurrentLocale()['login.email.placeholder']}
                                onChange={this.updateEmail} className={errorInput}
                            />
                            {errorTag}
                        </label>
                    </div>
                    <div className="text-right">
                        <button tabIndex="2" className="button">
                            <FormattedMessage id="login.loginButton" />
                        </button>
                    </div>
                </form>
                <div>
                    <p>
                        <FormattedMessage
                            id="login.text.questionNoAccountYet"
                            values={{ Link: chunks => (<Link to="/register">{chunks}</Link>) }}
                        />
                    </p>
                </div>
            </main>
        )
    }
}