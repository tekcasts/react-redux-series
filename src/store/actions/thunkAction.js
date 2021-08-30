import * as Action from "./actionConstants";
import axios from 'axios';


const beneficiaryLoad = () => {
    return {
        type: Action.BENEFICIARY_LOAD
    }
}

const beneficiarySuccess = (body) => {
    return {
        type: Action.BENEFICIARY_SUCCESS,
        payload: body
    }
}

const beneficiaryFailure = (err) => {
    return {
        type: Action.BENEFICIARY_FAILURE,
        payload: err.message
    }
}


export const getVaccineList = () => {
    return (dispatch) => {
        dispatch(beneficiaryLoad())
        return axios.get("http://localhost:8080/vaccinelist").then(
            response => dispatch(beneficiarySuccess(response.data)),
            err => dispatch(beneficiaryFailure(err))
        )
    };
}