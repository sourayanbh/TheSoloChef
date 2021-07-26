import { recipeReducer } from "../Reducer/recipeReducer";
import { createStore } from "redux";


const store = createStore(recipeReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store