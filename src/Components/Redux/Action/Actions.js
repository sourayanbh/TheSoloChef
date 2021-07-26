import { ActionTypes } from "./ActionType";


export const showRecipies = (recipies) => {
    return {
        type : ActionTypes.SET_RECIPIES,
        payload : recipies
    }
}