import * as redux from "redux";
import defaultCustomerState, { CustomerState } from "./CustomersState";
import { ActionTypes, ActionPayload } from "./ActionTypes";
import { Customer } from "../entities";

function CustomersReducer(state=defaultCustomerState,action:ActionPayload):CustomerState{
    switch(action.type){
        case ActionTypes.AddCustomer:
            {
                let newCustomer:Customer=action.payload;
                let existingCustomers=state.allCustomers
                existingCustomers.push(newCustomer);
                let newState:CustomerState={...state,...{allCustomers:existingCustomers}};
                return newState;
            }

        case ActionTypes.RefreshCustomers:
            {
                let freshCustomers:Customer[]=action.payload;
                let newState:CustomerState={...state, ...{allCustomers:freshCustomers}};
                return newState;
            }
            
        default:
            return state;
    }
}
export const DemoStore:redux.Store=redux.createStore(CustomersReducer)