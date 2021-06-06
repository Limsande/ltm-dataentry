import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./routes/login";
import Data from "./routes/data";
import {Provider} from "react-redux";
import store from "./store";
import {Header} from "./components/header";
import '../styles/app.scss';
import CreateEntry from "./routes/data/new";
import LandingPage from "./routes/landing";
import Register from "./routes/register";
import {IntlProvider} from "react-intl";
import {getTranslationsForCurrentLocale, getCurrentLocale} from "./common";
import {Footer} from "./components/footer";

/**
 * The app's main component defining routes and overall page layout.
 */
export default class LtmDataentry extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="flex-wrapper">
                        <Header />

                        <Switch>
                            <Route path="/" exact component={LandingPage} />
                            <Route path="/login" component={Login} />
                            <Route path="/data" component={Data} />
                            <Route path="/new" component={CreateEntry} />
                            <Route path="/register" component={Register} />
                        </Switch>

                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(
    /* Equip the IntlProvider with the translations for current locale,
    * what makes them available to the app we wrap inside the provider. */
    <IntlProvider
        locale={getCurrentLocale()}
        messages={getTranslationsForCurrentLocale()}
        defaultLocale="en"
    >
        <LtmDataentry/>
    </IntlProvider>,
    document.getElementById('app-entry-point'));
