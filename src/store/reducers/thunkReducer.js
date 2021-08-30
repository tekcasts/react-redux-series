import * as Action from "../actions/actionConstants"

const initialState = {
    registrants: [],
    loading: false,
    error: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.BENEFICIARY_LOAD:
            return {
                ...state,
                loading: true
            }
        case Action.BENEFICIARY_SUCCESS:
            const updatedMembers = [...state.registrants, ...action.payload]
            return {
                ...state,
                registrants: updatedMembers,
                loading: false
            }
        case Action.BENEFICIARY_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export default reducer;