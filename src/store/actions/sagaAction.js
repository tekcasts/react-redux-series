import * as Action from "./actionConstants";



export const sagaBeneficiaryLoad = () => {
    return {
        type: Action.SAGA_BENEFICIARY_LOAD
    }
}

export const sagaBeneficiarySuccess = (body) => {
    return {
        type: Action.SAGA_BENEFICIARY_SUCCESS,
        payload: body
    }
}

export const sagaBeneficiaryFailure = (err) => {
    return {
        type: Action.SAGA_BENEFICIARY_FAILURE,
        payload: err.message
    }
}

export const sagaVaccineList = () => {
    return {
        type: Action.SAGA_BENEFICIARY_LIST
    }
}

export const sagaSetSearch = (search) => {
    return {
        type: Action.SAGA_SEARCH,
        payload: search
    }
}