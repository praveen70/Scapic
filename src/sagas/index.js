import { all , spawn } from "redux-saga/effects";
import { updateUI, 
 } from './sagas';




export default function* rootSaga() {
    yield all([
        spawn(updateUI),
        
    
    ])
  }
  


