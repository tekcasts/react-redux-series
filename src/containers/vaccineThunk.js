import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as action from "../store/actions"
import Spinner from "../presentation/Spinner";

const VaccineThunk = (props) => {

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
        <h3>Vaccine List - Thunk Way</h3>
        {display}
    </>);
}

const mapStateToProps = (state) => {
    return {
        vaccineList: state.thunkdata.registrants,
        loading: state.thunkdata.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVaccineList: () => dispatch(action.getVaccineList())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(VaccineThunk);