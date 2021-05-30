import React from "react";
import {Link} from "react-router-dom";

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
            return <h2>Already logged in</h2>
        }

        let errorTag = null;
        let errorLabel = null;
        let errorInput = null;
        if (!this.state.loginValid) {
            errorTag = (
                <span className="form-error is-visible">No user exists with the e-mail address {this.state.email}.</span>
            );
            errorLabel = 'is-invalid-label';
            errorInput = 'is-invalid-input';
        }
        return (
            <main className="grid-container-x small callout">
                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    <div>
                        <label className={errorLabel}>E-Mail Address
                            <input type="email" name="email" placeholder="Your e-mail address" tabIndex="1" required="required" value={this.state.email} onChange={this.updateEmail} className={errorInput} />
                            {errorTag}
                        </label>
                    </div>
                    <div className="text-right">
                        <button tabIndex="2" className="button">Login</button>
                    </div>
                </form>
                <div>
                    <p>You don't have an account yet? <Link to="/register">Create an account</Link></p>
                </div>
            </main>
        )
    }
}