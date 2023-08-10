import React, {useState} from 'react';
import styles from './form.css'
// import {MultiSelect} from "primereact/multiselect";



const Form = () => {
    // const { selectedPoints, setSelectedPoints} = useState(null)
    // const points = [
    // {value: 'I would like to upgrade my bicycle to e-bike', code: 'GRADE'},
    // {value: 'I would like to repair my e-vehicle', code: 'REPAIR'},
    // {value: 'Other', code: 'OTHER'}
    // ]




    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="form-part"></div>
                <div className="form-content" id="form">
                    <div className="form-title">
                        <p>
                            Contact us
                        </p>
                    </div>
                        <div className="form-field">
                            <ul>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Full name</label>
                                    <input className="form-input" type="field" id="fullName"/>
                                </li>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Phone number</label>
                                    <input className="form-input" type="field" id="fullName"/>
                                </li>
                                <li>
                                    <label className="form-label" htmlFor="fullName">Email</label>
                                    <input className="form-input" type="field" id="fullName"/>
                                </li>
                                {/*<div className="form-radio">*/}
                                {/*    <input type="radio" id="radioButton"/>*/}
                                {/*    <label>I would like to upgrade my bike to e-bike</label>*/}
                                {/*</div>*/}
                                {/*<div className="form-radio">*/}
                                {/*    <input type="radio" id="radioButton"/>*/}
                                {/*    <label>I would like to repair my e-vehicle</label>*/}
                                {/*</div>*/}
                                {/*<div className="form-radio">*/}
                                {/*    <input type="radio" id="radioButton"/>*/}
                                {/*    <label>Other</label>*/}
                                {/*</div>*/}


                                {/* <MultiSelect optionLabel="name" optionValue="code" value={points} options={points} onChange={(e) => setSelectedPoints(e.value)} /> */}


                                <div className="form-submit">
                                    <button className="form-button">
                                        Send application
                                    </button>
                                </div>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Form;