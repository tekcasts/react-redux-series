import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions"
import Spinner from "../presentation/Spinner";
import { getFilteredList } from '../store/selectors/vaccineSelector';

const VaccineSaga = (props) => {

    const dispatch = useDispatch();

    const vaccineList = useSelector((state) => getFilteredList(state));
    const loading = useSelector((state) => state.sagadata.loading)


    useEffect(() => {
        dispatch(action.sagaVaccineList());
    }, [dispatch]);

    let display = (<Spinner />);

    if (!loading) {
        display = <table className="table">
            <thead>
                <tr>
                    <td>Member</td>
                    <td>Date</td>
                    <td>Vaccine</td>

                </tr>
            </thead>
            <tbody>
                {vaccineList.map((member, i) => {
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
        {display}
    </>);
}

// const mapStateToProps = (state) => {
//     return {
//         vaccineList: state.sagadata.registrants,
//         loading: state.sagadata.loading
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getVaccineList: () => dispatch(action.sagaVaccineList())
//     };
// }


export default VaccineSaga;