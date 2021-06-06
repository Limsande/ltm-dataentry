import React from "react";
import {Link, Redirect} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {getTranslationsForCurrentLocale} from "../common";

/**
 * Displays a login form. Optionally redirects after successful login to URL
 * given via <location.redirectTo> property with a <loggedIn> property set to true.
 * NOTE THAT IT IS HIGHLY INSECURE to rely on this as information about login status
 * and only serves demonstrative purposes. In a production system, this would be
 * handled e.g. by some kind of token exchange with the backend.
 */
export default class Login extends React.Component {

    /**
     * @param props
     *  - location.redirectTo Optional URL to redirect to after successful login.
     *    Property <location.loggedIn> is set to true on the destination
     *  - location.message Optional message to be displayed with the login form
     */
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            loginValid: true,
            loggedIn: false,
            // if this is set, we want to redirect there after login
            redirectTo: this.props.location.redirectTo,
            // if this is set, it will be displayed with the login form
            message: this.props.location.message
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
            const redirectTo = {
                pathname: this.state.redirectTo ? this.state.redirectTo : "/",
                loggedIn: true
            }
            return <Redirect to={redirectTo} />
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
                {this.state.message ? <div>{this.state.message}</div> : null}
                {/* Styling borrowed from https://get.foundation/building-blocks/blocks/form-login.html */}
                <form onSubmit={this.handleLogin} className="log-in-form">
                    <h4 className="text-center"><FormattedMessage id="login.title" /></h4>
                    <label className={errorLabel}>
                        <FormattedMessage id="login.email.label" />
                        {/* TODO remove me in production */}
                        <p className="lower">(Hint: It's test@example.com)</p>
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