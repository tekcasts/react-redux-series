

export const addBeneficary = (memberData) => {
    return {
        type: "ADD_BENEFICIARY",
        payload: memberData,
    }
}