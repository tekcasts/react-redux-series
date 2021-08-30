import * as Action from "../actions/actionConstants"

const initialState = {
    registrants: [],
    loading: false,
    error: '',
    search: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.SAGA_BENEFICIARY_LOAD:
            return {
                ...state,
                loading: true
            }
        case Action.SAGA_BENEFICIARY_SUCCESS:
            const updatedMembers = [...state.registrants, ...action.payload]
            return {
                ...state,
                registrants: updatedMembers,
                loading: false
            }
        case Action.SAGA_BENEFICIARY_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case Action.SAGA_SEARCH:
            // state.search = action.payload;
            // return state;
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}
export default reducer;