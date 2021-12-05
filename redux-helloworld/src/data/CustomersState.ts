import {Customer} from '../entities/Customer'

export interface CustomerState{
    allCustomers:Array<Customer>
    isBusy:boolean
}

const john:Customer={
    firstName:"john",
    id:"1001",
    lastName:"Doe"
}

const jane:Customer={
    firstName:"Jane",
    id:"1002",
    lastName:"Doe"
}


const defaultCustomerState:CustomerState={
    isBusy:false,
    allCustomers:[john,jane]
}

export default defaultCustomerState
