import React from "react";
import FormInputGroup from "./form_input_group";
import {FormattedMessage} from "react-intl";

/**
 * Special FormInputGroup with a fixed set of input elements, dedicated to marriage data.
 */
export default class FormInputGroupMarriage extends FormInputGroup{

    /**
     * @param props
     *  - title Title of the group, displayed above the input elements
     *  - changeHandler Function used as "onChange" handler for the input elements
     *  - idxOfMarriage Numeric identifier of this marriage, used in IDs, placeholders, and passed to <shouldBeDisabled>
     *  - shouldBeDisabled Boolean function to determine whether the input elements should be active. Called with <idxOfMarriage>
     */
    constructor(props) {
        super(props);
        
        // just shortcuts
        this.changeHandler = this.props.changeHandler;
        this.N = this.props.idxOfMarriage;
    }

    render() {
        // Should the input elements be disabled?
        const disabled = this.props.shouldBeDisabled(this.N);

        return (
            <div className="new-entry-section">
                <h4>{this.props.title}</h4>
                <div className="grid-x">
                    <label className="cell auto"><FormattedMessage id="new.input.marriageBinary" />
                        <input type="checkbox" onChange={this.changeHandler} id={"marriageBinary" + this.N}
                               placeholder={"marriageBinary" + this.N} />
                    </label>
                    <label className="cell auto"><FormattedMessage id="new.input.surnameMarriage" />
                        <input type="text" onChange={this.changeHandler} placeholder={"surnameMarriage" + this.N}
                               id={"surnameMarriage" + this.N} disabled={disabled} />
                    </label>
                    <label className="cell auto"><FormattedMessage id="new.input.marriageday" />
                        <input type="date" onChange={this.changeHandler} placeholder={"marriageday" + this.N}
                               id={"marriageday" + this.N} disabled={disabled} />
                    </label>
                    <label className="cell auto"><FormattedMessage id="new.input.marriageplace" />
                        <input type="text" onChange={this.changeHandler} placeholder={"marriageplace" + this.N}
                               id={"marriageplace" + this.N} disabled={disabled} />
                    </label>
                    <label className="cell auto"><FormattedMessage id="new.input.marriageplaceGOV" />
                        <input type="text" onChange={this.changeHandler} placeholder={"marriageplaceGOV" + this.N}
                               id={"marriageplaceGOV" + this.N} disabled={disabled} />
                    </label>
                    <label className="cell auto"><FormattedMessage id="new.input.ageAtMarriage" />
                        <input type="number" min="0" onChange={this.changeHandler} placeholder={"ageAtMarriage"  + this.N}
                               id={"ageAtMarriage"  + this.N} disabled={disabled} />
                    </label>
                    <label className="cell auto"><FormattedMessage id="new.input.idSpouse" />
                        <input type="text" onChange={this.changeHandler} placeholder={"idSpouse" + this.N}
                               id={"idSpouse" + this.N} disabled={disabled} />
                    </label>
                    <label className="cell auto"><FormattedMessage id="new.input.divorceday" />
                        <input type="date" onChange={this.changeHandler} placeholder={"divorceday" + this.N}
                               id={"divorceday" + this.N} disabled={disabled} />
                    </label>
                </div>
            </div>
        )
    }
}
