import React from "react";
import {Link, Redirect} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {getTranslationsForCurrentLocale} from "../common";

/**
 * Displays a login form. Optionally redirects after successful login to URL
 * given via <location.redirectTo> property.
 */
export default class Login extends React.Component {

    /**
     * @param props
     *  - location.redirectTo Optional URL to redirect to after successful login.
     *    Property <location.loggedIn> is set to true on the destination
     */
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            loginValid: true,
            loggedIn: false,
            // if this is set, we want to redirect there after login
            redirectTo: this.props.location.redirectTo
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
            if (this.state.redirectTo){
                const redirectTo = {
                    pathname: this.state.redirectTo,
                    loggedIn: true
                }
                return <Redirect to={redirectTo} />
            }
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
            <main className="grid-container-x small">
                {/* Styling borrowed from https://get.foundation/building-blocks/blocks/form-login.html */}
                <form onSubmit={this.handleLogin} className="log-in-form">
                    <h4 className="text-center"><FormattedMessage id="login.title" /></h4>
                    <label className={errorLabel}>
                        <FormattedMessage id="login.email.label" />
                        <input
                            type="email" name="email" tabIndex="1" required="required" value={this.state.email}
                            placeholder={getTranslationsForCurrentLocale()['login.email.placeholder']}
                            onChange={this.updateEmail} className={errorInput}
                        />
                        {errorTag}
                    </label>
                    <button tabIndex="2" className="button expanded">
                        <FormattedMessage id="login.loginButton" />
                    </button>
                    <p className="text-center">
                    <FormattedMessage
                        id="login.text.questionNoAccountYet"
                        values={{ Link: chunks => (<Link to="/register">{chunks}</Link>) }}
                    />
                </p>
                </form>
            </main>
        )
    }
}