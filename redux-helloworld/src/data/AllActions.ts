import { Customer } from "../entities";
import { ActionPayload } from "./ActionTypes";
import { ActionTypes } from "./ActionTypes";

export function addCustomer():ActionPayload{
    let d=new Date();
    let randomString:string=(d).getSeconds().toString();
    let newCustomer:Customer={
        id:randomString,
        firstName:"john"+randomString,
        lastName:"doe",
    };

    let payload:ActionPayload={
        type:ActionTypes.AddCustomer,
        payload:newCustomer
    }
    return payload;
}

export function refreshCustomers():ActionPayload{
    let d=new Date();
    let randomString:string=(d).getSeconds().toString();
    let count=d.getSeconds()%4+5;
    let customers:Customer[] = [];
    for(let index=0;index<count;index++){
        let newCustomer:Customer={
            id:randomString+index.toString(),
            firstName:"john"+randomString+index.toString(),
            lastName:"doe"+index.toString(),
        }
        customers.push(newCustomer);
    }
    let payload:ActionPayload={
        type:ActionTypes.RefreshCustomers,
        payload:customers
    }
    return payload;
}

