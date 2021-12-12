import * as rc from 'react';
import * as components from './../components'

import * as redux from "redux";
import {CustomerState} from '../data/CustomersState'
import * as actions from '../data/AllActions';

const CustomersPage = (props:any) => {
    let store:redux.Store=props.store;
    const [currrentState,setCurrentState]=rc.useState(store.getState())
    const onRefreshClickHandler=()=>{
        console.log("refresh button was clicked")
        store.dispatch(actions.refreshCustomers())
    };

    console.log("inside ParticipantPange");
    console.log({props})
    console.log({currrentState})
    console.log(`current count of participants is ${currrentState.allCustomers.length}`)
    const storeChangeHandler=()=>{
        let newState=store.getState()
        setCurrentState(newState)
        console.log("Store changed")
        console.log({currrentState})
    };
    store.subscribe(storeChangeHandler)
    
    const onAddCustomerClickHandler=()=>{
        console.log("add customer button was clicked")
        store.dispatch(actions.addCustomer());
    };
    
    const onUploadCustomersClickHandler=()=>{
        console.log("upload customers button was clicked")
    };

    console.log("Render function")
    console.log({currrentState})

    return (
        <div>
            <components.Navbar/>
            <components.Toolbar 
                RefreshClickHandler={onRefreshClickHandler}
                AddCustomerClickHandler={onAddCustomerClickHandler}
                UploadCustomerClickHandler={onUploadCustomersClickHandler}
            >
            </components.Toolbar>
            <components.CustomersGrid customers={currrentState.allCustomers}></components.CustomersGrid>
        </div>
    );
};

export default CustomersPage;