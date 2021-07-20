 import {Increment,Decrement} from '../actionTypes/Test';

export const PlusValue = (value:number) =>{
    return {
        type:Increment,
        data:value
    }
}

export const MinusValue = (value:number) =>{
    return {
        type:Decrement,
        data:value
    }
}