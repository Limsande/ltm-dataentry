import React from 'react';
import {FormattedMessage} from 'react-intl';
import Menu from './menu.jsx';
import {Link} from "react-router-dom";

/**
 * A component rendering a page header with title and nav bar.
 */
export class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="top-bar">
                    <div className="top-bar-left">
                        <h1><FormattedMessage id="header.title" /></h1>
                    </div>
                    <div className="top-bar-right">
                        <Menu label="Main" class="horizontal">
                            <li><Link to="/" role="menuitem" tabIndex="0">
                                <FormattedMessage id="menu.link.home" />
                            </Link></li>
                            <li><Link to="/data" role="menuitem" tabIndex="-1">
                                <FormattedMessage id="menu.link.datalist" />
                            </Link></li>
                            <li><Link to="/new" role="menuitem" tabIndex="-1">
                                <FormattedMessage id="menu.link.newdata" />
                            </Link></li>
                            <li><Link to="/login" role="menuitem" tabIndex="-1">
                                <FormattedMessage id="menu.link.login" />
                            </Link></li>
                        </Menu>
                    </div>
                </header>
            </div>
        )
    }
}