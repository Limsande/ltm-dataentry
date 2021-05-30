import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from './data/index.jsx';
import View from "./data/view";

export default function Data() {
    return (
        <Switch>
            <Route path="/data" exact component={Index}/>
            <Route path="/data/:mid" exact component={View}/>
        </Switch>
    );
};