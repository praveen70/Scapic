import {FETCH_FOOD } from  '../actions/actionsType';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

 import api, { foodApi }  from '../api';




export function* fetchFoodData(){
 
  yield takeLatest(FETCH_FOOD, updateUI);
}


export function* updateUI(){

  try{
      const data = yield call (foodApi);
      if( data ){
       
      yield put({ type: FETCH_FOOD, payload: data.data });
      }
      
  }catch(err){
    yield put ({ type: "data", payload: err })
  }
  

}









