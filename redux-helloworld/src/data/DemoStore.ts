import * as redux from "redux";
import defaultCustomerState from "./CustomersState";

function CustomersReducer(state=defaultCustomerState,action:any){
    switch(action.type){
        case 'ADD_CUSTOMER':
            throw 'not implemented';

        default:
            return state;
    }
}
export const DemoStore:redux.Store=redux.createStore(CustomersReducer)