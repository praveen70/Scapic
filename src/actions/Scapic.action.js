import { FETCH_FOOD} from "./actionsType";

export function fetchFood(name, dispatch){
   
    return {
        type: FETCH_FOOD,
        name,
    };
}