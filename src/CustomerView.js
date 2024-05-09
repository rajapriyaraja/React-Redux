import React from "react";
export default function  CustomerView(){
    return <div>
        <h3>Customer List</h3>
        <ul>{
            customers.map((customer) =><li>{customer}</li>)
            }
           
        </ul>
    </div>

}