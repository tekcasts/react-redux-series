import { call, put, select } from "@redux-saga/core/effects";
import { sagaBeneficiaryLoad, sagaBeneficiarySuccess, sagaBeneficiaryFailure } from "../actions"
import * as Api from "../../service/ApiVaccine";
import { getVaccineList } from "../selectors/vaccineSelector";

export function* fetchVaccineList(action) {
    const registrants = yield select(getVaccineList);
    if (registrants.length === 0) {
        yield put(sagaBeneficiaryLoad())
        try {
            const response = yield call(Api.fetchVaccineListApi);
            yield put(sagaBeneficiarySuccess(response.data));
        } catch (err) {
            yield put(sagaBeneficiaryFailure(err));
        }
    }

}