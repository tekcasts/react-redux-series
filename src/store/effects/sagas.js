import { takeEvery } from "@redux-saga/core/effects";
import * as Action from "../actions/actionConstants";
import { fetchVaccineList } from "./fetchVaccineList"

export function* fetchVaccineListSaga() {
    yield takeEvery(Action.SAGA_BENEFICIARY_LIST, fetchVaccineList);
}