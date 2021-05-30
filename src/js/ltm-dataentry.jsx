import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./routes/login";
import Data from "./routes/data";
import {Provider} from "react-redux";
import store from "./store";

export default class LtmDataentry extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <h1>Hello World!</h1>

                    <ul>
                        <li><Link to="/login" role="menuitem" tabIndex="0">Login</Link></li>
                        <li><Link to="/data" role="menuitem" tabIndex="-1">Data</Link></li>
                    </ul>

                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/data" component={Data} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<LtmDataentry/>, document.getElementById('app-entry-point'));
