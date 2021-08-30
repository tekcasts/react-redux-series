import { createSelector } from 'reselect'

const getFilter = (state) => state.sagadata.search
export const getVaccineList = (state) => state.sagadata.registrants

export const getFilteredList = createSelector(
    [getFilter, getVaccineList],
    (searchTerm, registrants) => {
        switch (searchTerm) {
            case '':
                return registrants
            case 'SK':
                console.log("SK");
                return registrants.filter(ben => ben.vaccine === 'SK')
            case 'CS':
                return registrants.filter(ben => ben.vaccine === 'CS')
            case 'CV':
                return registrants.filter(ben => ben.vaccine === 'CV')
            default:
                return registrants
        }
    }
)