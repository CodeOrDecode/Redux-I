import { ADDTODO, LOGIN, MODECHANGE } from "./actionitems";
import { EDITSTATUS } from "./actionitems";

export function todoreducer(state = [], { type, payload }) {

    switch (type) {
        case ADDTODO: {
            return [...state, payload]
        }
        case EDITSTATUS: {
            return payload
        }

        default: {
            return state
        }
    }

}

export function modereducer(state = true, { type, payload }) {

    switch (type) {

        case MODECHANGE: {
            return payload
        }

        default: {
            return state
        }
    }

}


export function loginreducer(state = {auth:false}, { type, payload }) {

    switch (type) {

        case LOGIN: {
            return {auth:payload}
        }

        default: {
            return state
        }
    }

}
