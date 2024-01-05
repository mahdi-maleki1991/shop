import { legacy_createStore } from "redux";
import { reducerNightMode } from "../Reducers/reducerNightMod";

export const storNightMode = legacy_createStore(reducerNightMode)

