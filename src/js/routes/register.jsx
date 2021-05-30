import React from "react";
import {Link} from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            role: '',
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
            return <h2>Account created</h2>
        }

        let errorTag = null;
        let errorLabel = null;
        let errorInput = null;
        if (this.state.emailInUse) {
            errorTag = (
                <span className="form-error is-visible">An account already exists with the e-mail address {this.state.email}.</span>
            );
            errorLabel = 'is-invalid-label';
            errorInput = 'is-invalid-input';
        }
        return (
            <main className="grid-container-x small callout">
                <h1>Create an account</h1>
                <form onSubmit={this.handleRegister}>
                    <div>
                        <label className={errorLabel}>E-Mail Address
                            <input type="email" name="email" placeholder="Your e-mail address" tabIndex="1" required="required" value={this.state.email} onChange={this.updateEmail} className={errorInput} />
                            {errorTag}
                        </label>
                        <label>Role
                            <select value={this.state.role} onChange={this.updateRole}>
                                <option value="admin">Admin</option>
                                <option value="contributor">Contributor</option>
                            </select>
                        </label>
                    </div>
                    <div className="text-right">
                        <button tabIndex="2" className="button">Create account</button>
                    </div>
                </form>
                <div>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </main>
        )
    }
}