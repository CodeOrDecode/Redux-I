import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { modereducer, todoreducer } from "./Todo/todoreducer";
import { loginreducer } from "./Todo/todoreducer";

let rootreducer = combineReducers({
    todo:todoreducer,
    modethe:modereducer,
    auth:loginreducer
})

export const store = legacy_createStore(rootreducer);