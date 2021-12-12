export enum ActionTypes{
    AddCustomer="ADD_CUSTOMER",
    RefreshCustomers="REFRESH_CUSTOMERS"
}

export interface ActionPayload{
    type:ActionTypes,
    payload:any
}