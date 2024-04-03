import { ADDTODO, LOGIN, MODECHANGE } from "./actionitems"
import { EDITSTATUS } from "./actionitems"

export function addtodo(val){
    return {type:ADDTODO,payload:val}

}


export function edittodo(val){
    return {type:EDITSTATUS,payload:val}

}

export function modechange(val){
    return {type:MODECHANGE,payload:val}

}


export function loginchange(val){
    return {type:LOGIN,payload:val}

}