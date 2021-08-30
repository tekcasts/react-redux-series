

const initialState = {
    registrants: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_BENEFICIARY":
            const addedMembers = [...state.registrants, action.payload]
            return {
                ...state,
                registrants: addedMembers
            }
        default:
            return state;
    }
}
export default reducer;