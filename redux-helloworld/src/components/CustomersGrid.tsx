import * as React from 'react';
import { Customer } from '../entities';

const CustomersGrid = (props:any) => {
    let customers:Array<Customer>=props.customers;

    let customerRenderer=():Array<Object>=>{
        let displayItems=customers.map((c)=>{
            return <li key={c.id}>{c.firstName}</li>
        })
        return displayItems;
    }
    return (
        <div>
            customers list comes here. I got '{customers.length}'' customers
            <ol>
                {customerRenderer()}
            </ol>
        </div>
    );
};

export default CustomersGrid;