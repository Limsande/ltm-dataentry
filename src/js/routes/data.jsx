import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from './data/index.jsx';
import View from "./data/view";
import Edit from "./data/edit";

/**
 * This component defines sub-routes for the "/data" route.
 */
export default function Data() {
    return (
        <Switch>
            <Route path="/data" exact component={Index}/>
            <Route path="/data/:mid" exact component={View}/>
            <Route path="/data/:mid/edit" component={Edit}/>
        </Switch>
    );
};