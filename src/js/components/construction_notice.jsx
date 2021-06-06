import React from "react";

/**
 * A component rendering a "this site is under construction" banner.
 * TODO remove in production
 */
export class ConstructionNotice extends React.Component {

    render() {
        return (
            <div className="panel construction radius">
                <h5>This site is under construction.</h5>
                <p>It's functionality has not been implemented yet.</p>
            </div>
        )
    }
}
