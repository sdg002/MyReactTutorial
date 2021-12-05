import * as React from 'react';
import { Customer } from '../entities';

const CustomersGrid = (props:any) => {
    let customers:Array<Customer>=props.customers;

    let customerRenderer=():Array<Object>=>{
        let displayItems=customers.map((c)=>{
            return <div key={c.id}>{c.firstName}</div>
        })
        return displayItems;
    }
    return (
        <div>
            customers list comes here. I got '{customers.length}'' customers
            <ul>
                {customerRenderer()}
            </ul>
        </div>
    );
};

export default CustomersGrid;