import React, { useState } from 'react';
import { connect } from "react-redux";
import * as action from "../store/actions"


const initialState = {
    name: "",
    date: "",
    vaccine: ""
}

const VacccineForm = (props) => {

    const [vaccineform, setVaccineForm] = useState(initialState);

    const handleFormChange = e => {
        setVaccineForm({
            ...vaccineform, [e.target.name]: e.target.value
        })
    };

    const submitForm = e => {
        e.preventDefault();
        // Redux - Dispatch
        props.addBeneficiary(vaccineform);
        setVaccineForm(initialState)
    };

    return (
        <>
            <h3>Vaccine Form</h3>
            <form onSubmit={submitForm}>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Name of the Member"
                    name="name"
                    onChange={handleFormChange}
                    value={vaccineform.name}
                ></input>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Date of Vaccination"
                    name="date"
                    onChange={handleFormChange}
                    value={vaccineform.date}
                ></input>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Vaccine"
                    name="vaccine"
                    onChange={handleFormChange}
                    value={vaccineform.vaccine}
                ></input>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <h3>Vaccine List</h3>
            <table className="table">
                <tr>
                    <td>Member</td>
                    <td>Date</td>
                    <td>Vaccine</td>

                </tr>
                {props.vaccineList.map((member, i) => {
                    return (
                        <tr key={i}>
                            <td>{member.name}</td>
                            <td> {member.date}</td>
                            <td>{member.vaccine}</td>
                        </tr>
                    );
                })}
            </table>

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        vaccineList: state.vaccine.registrants
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBeneficiary: (memberData) => dispatch(action.addBeneficary(memberData))
    };
}




export default connect(mapStateToProps, mapDispatchToProps)(VacccineForm);