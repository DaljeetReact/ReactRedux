import { PlusValue,MinusValue } from '../ActionsObjects/TestObj';
import {CounterInit} from '../InitStates'

const  CounterReducer =(state = CounterInit,action:any)=>{
    switch (action.type) {
        case 'increment':
            return{...state,
            value:state.value+1  
            }
            
        break;
        case 'decrement':
            return{...state,
            value:state.value-1 
            }
            
        break;

        default:
            return state;
            break;
    }
    
}

export default CounterReducer;