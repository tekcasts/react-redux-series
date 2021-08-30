import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import * as action from "../store/actions"
import Spinner from "../presentation/Spinner";

import { getFilteredList } from '../store/selectors/vaccineSelector';

const VaccineReselect = (props) => {

    const [search, setSearch] = useState("");

    const handleFormChange = e => {
        setSearch(e.target.value)
    };

    const submitForm = e => {
        e.preventDefault();
        // Redux - Dispatch
        props.setSearch(search);

    };

    useEffect(() => {
        props.getVaccineList();
    }, []);

    let display = (<Spinner />);

    if (!props.loading) {
        display = <table className="table">
            <thead>
                <tr>
                    <td>Member</td>
                    <td>Date</td>
                    <td>Vaccine</td>

                </tr>
            </thead>
            <tbody>
                {props.vaccineList.map((member, i) => {
                    return (
                        <tr key={i}>
                            <td>{member.name}</td>
                            <td> {member.date}</td>
                            <td>{member.vaccine}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    }

    return (<>
        <h3>Vaccine List - Saga Way</h3>

        <form onSubmit={submitForm}>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="Search by Vaccine"
                name="name"
                onChange={handleFormChange}
                value={search}
            ></input>


            <button type="submit" className="btn btn-primary">Search</button>
        </form>
        {display}
    </>);
}

const mapStateToProps = (state) => {
    return {
        vaccineList: getFilteredList(state),
        loading: state.sagadata.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVaccineList: () => dispatch(action.sagaVaccineList()),
        setSearch: (search) => dispatch(action.sagaSetSearch(search)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(VaccineReselect);