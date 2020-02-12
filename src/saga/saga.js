import { put, takeEvery } from 'redux-saga/effects'


function* addAsync(){
    yield put({type:"ADD_ASYNC"})
}

export function* watchADD(){
    console.log("in Saga");
    yield takeEvery("ADD",addAsync)
}