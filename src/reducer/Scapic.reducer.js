import { FETCH_FOOD } from '../actions/actionsType';



const initialState = {
    
    Food: [],
   
};

export default function food (state = initialState, action={}){
   
    switch(action.type){
        case FETCH_FOOD:
   
        return {...state, Food: action.payload }
          
        default:
            return state;
            
    }
    
}

