import { legacy_createStore } from "redux";
import { reducerBasket } from "../Reducers/reducerBasket";

export const storBasket = legacy_createStore(reducerBasket)







