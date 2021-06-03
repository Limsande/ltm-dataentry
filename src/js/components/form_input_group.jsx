import React from "react";

/**
 * A group of semantically related input elements. Intended to divide large forms into
 * visually separated sections.
 */
export default class FormInputGroup extends React.Component{

    /**
     * @param props
     *  - title Title of the group, displayed above the input elements
     *  - children Elements to be displayed inside the group
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="new-entry-section">
                <h4>{this.props.title}</h4>
                <div className="grid-x">
                    {this.props.children}
                </div>
            </div>
        )
    }
}