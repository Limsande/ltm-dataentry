import React from "react";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {getTranslationsForCurrentLocale} from "../common";

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            role: 'admin',
            emailInUse: false,
            success: false
        }
    }

    updateEmail = (ev) => {
        this.setState({
            email: ev.target.value
        });
    }

    updateRole = (ev) => {
        this.setState({
            role: ev.target.value
        });
    }

    handleRegister = (ev) => {
        ev.preventDefault();
        if (this.state.email === 'test@example.com') {
            this.setState({
                emailInUse: true
            });
        } else {
            this.setState({
                success: true
            });
        }
    }

    /**
     * Render the component
     */
    render() {
        if (this.state.success){
            return <h2><FormattedMessage id="register.message.success" /></h2>
        }

        let errorTag = null;
        let errorLabel = null;
        let errorInput = null;
        if (this.state.emailInUse) {
            errorTag = (
                <span className="form-error is-visible">
                    <FormattedMessage
                        id="register.message.emailAlreadyInUse"
                        values={{ email: this.state.email }}
                    />
                </span>
            );
            errorLabel = 'is-invalid-label';
            errorInput = 'is-invalid-input';
        }
        return (
            <main className="grid-container-x small callout">
                <h1><FormattedMessage id="register.title" /></h1>
                <form onSubmit={this.handleRegister}>
                    <div>
                        <label className={errorLabel}>
                            <FormattedMessage id="register.email.label" />
                            <input
                                type="email" name="email"
                                placeholder={getTranslationsForCurrentLocale()['register.email.placeholder']} tabIndex="1"
                                required="required" value={this.state.email} onChange={this.updateEmail}
                                className={errorInput}
                            />
                            {errorTag}
                        </label>
                        <label>
                            <FormattedMessage id="register.role.label" />
                            <select value={this.state.role} onChange={this.updateRole}>
                                <FormattedMessage id="register.role.admin" tagName="option" value="admin" />
                                <FormattedMessage id="register.role.contributor" tagName="option" value="contributor" />
                            </select>
                        </label>
                    </div>
                    <div className="text-right">
                        <button tabIndex="2" className="button">
                            <FormattedMessage id="register.createButton" />
                        </button>
                    </div>
                </form>
                <div>
                    <p>
                        <FormattedMessage
                            id="register.text.questionAlreadyHaveAccount"
                            values={{ Link: chunks => (<Link to="/login">{chunks}</Link>) }}
                        />
                    </p>
                </div>
            </main>
        )
    }
}