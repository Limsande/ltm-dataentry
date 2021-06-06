import React from 'react';

/**
 * ARIA-compliant menu component.
 */
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    keyDown(ev) {
        if (ev.keyCode === 39) {
            let nextElement = ev.target.parentElement.nextElementSibling;
            while (nextElement && (nextElement.getAttribute('role') === 'separator' ||
                nextElement.querySelector('*[role="menuitem"]').getAttribute('aria-disabled') === 'true')) {
                nextElement = nextElement.nextElementSibling;
            }
            if (nextElement) {
                nextElement.querySelector('*[role="menuitem"]').focus();
            }
        } else if (ev.keyCode === 37) {
            let previousElement = ev.target.parentElement.previousElementSibling;
            while (previousElement && (previousElement.getAttribute('role') === 'separator' ||
                previousElement.querySelector('*[role="menuitem"]').getAttribute('aria-disabled') === 'true')) {
                previousElement = previousElement.previousElementSibling;
            }
            if (previousElement) {
                previousElement.querySelector('*[role="menuitem"]').focus();
            }
        }
    }

    render() {
        return (
            <nav>
                <ul className={this.props.class} role="menu" onKeyDown={this.keyDown} aria-label={this.props.label}>
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}