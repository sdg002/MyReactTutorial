import React from 'react';
import * as components from './../components'
//import Store from '../data/DemoStore';
import * as redux from "redux";
import {CustomerState} from '../data/CustomersState'

const ParticipantPage = (props:any) => {
    const onRefreshClickHandler=()=>{
        console.log("refresh button was clicked")
    };

    console.log("inside ParticipantPange");
    console.log({props})
    let store:redux.Store=props.store;
    let currrentState:CustomerState=store.getState();
    console.log({currrentState})
    console.log(`current count of participants is ${currrentState.allCustomers.length}`)
    const storeChangeHandler=()=>{
        console.log("Store changed")
        currrentState=store.getState()
    };
    store.subscribe(storeChangeHandler)
    


    const onAddCustomerClickHandler=()=>{
        console.log("add customer button was clicked")
    };
    
    const onUploadCustomersClickHandler=()=>{
        console.log("upload customers button was clicked")
    };

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

export default ParticipantPage;