import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import FormInputGroup from "../../components/form_input_group";
import FormInputGroupMarriage from "../../components/form_input_group_marriage";
import {FormattedMessage} from "react-intl";

/**
 * Component to create a new item at the API`s "data" endpoint. Renders a form, so that
 * the user can set a value for each of the item's keys. Redirects to /login, if the property
 * <location.loggedIn> is not set to true (check the login component's NOTE ABOUT INSECURITY).
 */
class CreateEntry extends React.Component {

    /**
     * @param props
     *  - location.loggedIn Whether the user is logged in
     */
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: this.props.location.loggedIn,

            idGlobal: '',  // required
            idSource1: '',  // required
            idSource2: '',  // required
            firstnameGiven: '',
            firstnameChange: '',
            sex: '',  // [F|M|Other]
            surnameGiven: '',
            surnameChange: '',
            surnameMarriage1: '',
            surnameMarriage2: '',
            surnameMarriage3: '',
            surnameUnknown: '',
            birthday: '',  // DD.MM.YYYY
            birthplace: '',
            birthplaceGOV: '',
            growthUpPlace: '',
            growthUpPlaceGOV: '',
            baptismday: '',  // DD.MM.YYYY
            baptismplace: '',
            baptismplaceGOV: '',
            marriageBinary1: false,  // format unknown
            marriageday1: '',  // DD.MM.YYYY
            marriageplace1: '',
            marriageplaceGOV1: '',
            ageAtMarriage1: '',  // int (years)
            idSpouse1: '',
            divorceday1: '',  // DD.MM.YYYY
            marriageBinary2: false,  // format unknown
            marriageday2: '',  // DD.MM.YYYY
            marriageplace2: '',
            marriageplaceGOV2: '',
            ageAtMarriage2: '',  // int (years)
            idSpouse2: '',
            divorceday2: '',  // DD.MM.YYYY
            marriageBinary3: false,  // format unknown
            marriageday3: '',  // DD.MM.YYYY
            marriageplace3: '',
            marriageplaceGOV3: '',
            ageAtMarriage3: '',  // int (years)
            idSpouse3: '',
            divorceday3: '',  // DD.MM.YYYY
            deathday: '',  // DD.MM.YYYY
            deathplace: '',
            deathplaceGOV: '',
            causeOfDeath: '',  // list of words, separated by ", " or " und "
            martialStatusAtDeath: '',
            ageAtDeath: '',  // int (years)
            burialday: '',  // DD.MM.YYYY
            burialplace: '',
            burialplaceGOV: '',
            occupation: '',  // list of words, separated by ", " or " und "
            idFather: '',
            idMother: '',
            similarity: '',  // number
            source: '',
            created: false
        }
    }

    /**
     * Using a given event <ev>, updates the state's attribute <ev.target.id> with
     * <ev.target.checked> (if it's a checkbox), or <ev.target.value> (if it's not).
     * @param ev Event on an input element
     */
    updateStateWithInputEvent = (ev) => {
        let update;
        update = {};
        if (ev.target.type === 'checkbox'){
            update[ev.target.id] = ev.target.checked;
        } else {
            update[ev.target.id] = ev.target.value;
        }
        this.setState(update);
    }

    /**
     * Returns true, if the input elements corresponding to marriage <n> should
     * be enabled. Returns false, otherwise.
     * @param n Index of marriage
     * @returns {boolean} Whether the marriage's input elements should be enabled
     */
    marriageShouldBeDisabled = (n) => {
        return !this.state["marriageBinary" + n];
    }

    /**
     * Creates the new item in the API, using current inputs.
     * (Currently not implemented)
     * @param ev Confirmation button's click event
     */
    createEntry = (ev) => {
        ev.preventDefault();
        {/* TODO */}
    }

    /**
     * Render the component
     */
    render() {
        if (!this.state.loggedIn) {
            const loginURL = {
                pathname: "/login",
                redirectTo: document.location.pathname
            };

            return <Redirect to={loginURL} />
        }

        if(this.state.created) {
            {/* TODO */}
            return <h1>Not supported</h1>
        } else {
            const commonProps = {
                onChange:  this.updateStateWithInputEvent
            }

            return (
                <main className="grid-container-x">
                    <form className="new-entry-form" onSubmit={this.createEntry}>
                        <h4 className="text-center"><FormattedMessage id="new.title" /></h4>

                        {/* METADATA */}
                        <FormInputGroup title="Metadaten" >
                            <label className="cell auto"><FormattedMessage id="new.input.idSource1" />
                                <input type="text" {...commonProps} placeholder="idSource1"
                                       id="idSource1" required="required" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.idSource2" />
                                <input type="text" {...commonProps} placeholder="idSource2"
                                       id="idSource2" required="required" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.idGlobal" />
                                <input type="text" {...commonProps} placeholder="idGlobal"
                                       id="idGlobal" required="required" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.similarity" />
                                <input type="number" {...commonProps} placeholder="similarity"
                                       id="similarity"/>
                            </label>
                        </FormInputGroup>

                        {/* BASIC DATA */}
                        <FormInputGroup title="Basisdaten">
                            <label className="cell auto"><FormattedMessage id="new.input.firstnameGiven" />
                                <input type="text" {...commonProps} placeholder="firstnameGiven"
                                       id="firstnameGiven" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.surnameGiven" />
                                <input type="text" {...commonProps} placeholder="surnameGiven"
                                       id="surnameGiven" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.sex" />
                                <select {...commonProps} id="sex">
                                    <option value="M">Männlich</option>
                                    <option value="F">Weiblich</option>
                                    <option value="">Anderes</option>
                                </select>
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.occupation" />
                                <input type="text" {...commonProps} placeholder="occupation"
                                       id="occupation" />
                            </label>
                        </FormInputGroup>

                        {/* PARENTS AND BIRTH */}
                        <FormInputGroup title="Eltern und Geburt">
                            <label className="cell auto"><FormattedMessage id="new.input.idFather" />
                                <input type="text" {...commonProps} placeholder="idFather"
                                       id="idFather" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.idMother" />
                                <input type="text" {...commonProps} placeholder="idMother"
                                       id="idMother" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.birthday" />
                                <input type="date" {...commonProps} placeholder="birthday"
                                       id="birthday" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.birthplace" />
                                <input type="text" {...commonProps} placeholder="birthplace"
                                       id="birthplace" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.birthplaceGOV" />
                                <input type="text" {...commonProps} placeholder="birthplaceGOV"
                                       id="birthplaceGOV" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.growthUpPlace" />
                                <input type="text" {...commonProps} placeholder="growthUpPlace"
                                       id="growthUpPlace" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.growthUpPlaceGOV" />
                                <input type="text" {...commonProps}
                                       placeholder="growthUpPlaceGOV" id="growthUpPlaceGOV" />
                            </label>
                        </FormInputGroup>

                        {/* BAPTISM */}
                        <FormInputGroup title="Taufe">
                            <label className="cell auto"><FormattedMessage id="new.input.baptismday" />
                                <input type="date" {...commonProps} placeholder="baptismday"
                                       id="baptismday" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.baptismplace" />
                                <input type="text" {...commonProps} placeholder="baptismplace"
                                       id="baptismplace" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.baptismplaceGOV" />
                                <input type="text" {...commonProps}
                                       placeholder="baptismplaceGOV" id="baptismplaceGOV" />
                            </label>
                        </FormInputGroup>

                        {/* MARRIAGE 1 */}
                        <FormInputGroupMarriage
                            title="1. Heirat" idxOfMarriage="1" changeHandler={this.updateStateWithInputEvent}
                            shouldBeDisabled={this.marriageShouldBeDisabled}
                        />

                        {/* MARRIAGE 2 */}
                        <FormInputGroupMarriage
                            title="2. Heirat" idxOfMarriage="2" changeHandler={this.updateStateWithInputEvent}
                            shouldBeDisabled={this.marriageShouldBeDisabled}
                        />

                        {/* MARRIAGE 3 */}
                        <FormInputGroupMarriage
                            title="3. Heirat" idxOfMarriage="3" changeHandler={this.updateStateWithInputEvent}
                            shouldBeDisabled={this.marriageShouldBeDisabled}
                        />

                        {/* NAME CHANGES */}
                        <FormInputGroup title="Namensänderungen">
                            <label className="cell auto"><FormattedMessage id="new.input.firstnameChange" />
                                <input type="text" {...commonProps}
                                       placeholder="firstnameChange" id="firstnameChange" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.surnameChange" />
                                <input type="text" {...commonProps} placeholder="surnameChange"
                                       id="surnameChange"/>
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.surnameUnknown" />
                                <input type="text" {...commonProps}
                                       placeholder="surnameUnknown" id="surnameUnknown" />
                            </label>
                        </FormInputGroup>

                        {/* DEATH AND BURIAL */}
                        <FormInputGroup title="Tod und Beerdigung">
                            <label className="cell auto"><FormattedMessage id="new.input.deathday" />
                                <input type="date" {...commonProps} placeholder="deathday"
                                       id="deathday" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.deathplace" />
                                <input type="text" {...commonProps} placeholder="deathplace"
                                       id="deathplace" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.deathplaceGOV" />
                                <input type="text" {...commonProps} placeholder="deathplaceGOV"
                                       id="deathplaceGOV" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.causeOfDeath" />
                                <input type="text" {...commonProps} placeholder="causeOfDeath"
                                       id="causeOfDeath" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.martialStatusAtDeath" />
                                <input type="text" {...commonProps}
                                       placeholder="martialStatusAtDeath" id="martialStatusAtDeath" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.ageAtDeath" />
                                <input type="number" min="0" {...commonProps}
                                       placeholder="ageAtDeath" id="ageAtDeath" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.burialday" />
                                <input type="date" {...commonProps} placeholder="burialday"
                                       id="burialday" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.burialplace" />
                                <input type="text" {...commonProps} placeholder="burialplace"
                                       id="burialplace" />
                            </label>
                            <label className="cell auto"><FormattedMessage id="new.input.burialplaceGOV" />
                                <input type="text" {...commonProps}
                                       placeholder="burialplaceGOV" id="burialplaceGOV" />
                            </label>
                        </FormInputGroup>

                        <button className="button expanded"><FormattedMessage id="new.createButton" /></button>
                        <Link to="/" className="secondary button expanded">
                            <FormattedMessage id="new.cancelButton" />
                        </Link>
                    </form>
                </main>
            )
        }
    }
}

/*
 * Connect this component to the data store.
 */
export default connect()(CreateEntry);