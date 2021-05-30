import React from 'react';

import Menu from './menu.jsx';
import {Link} from "react-router-dom";

export class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="top-bar">
                    <div className="top-bar-left">
                        <h1>Leipzig Time Machine - Data Entry Tool</h1>
                    </div>
                    <div className="top-bar-right">
                        <Menu label="Main" class="horizontal">
                            <li><Link to="/" role="menuitem" tabIndex="0">Home</Link></li>
                            <li><Link to="/data" role="menuitem" tabIndex="-1">Data</Link></li>
                            <li><Link to="/new" role="menuitem" tabIndex="-1">Eintrag erstellen</Link></li>
                            <li><Link to="/login" role="menuitem" tabIndex="-1">Login</Link></li>
                        </Menu>
                    </div>
                </header>
            </div>
        )
    }
}