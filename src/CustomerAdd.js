import React, { useState } from 'react';
function  CustomerAdd(){
    const [input,setInput]=useState("")
    const[customers,setCustomers]=useState([]);

    function addCustomer(){
        if(input){
            setCustomers((previousState)=>[...previousState, input])
        }
    }
    return(
    <div>
        <h1>Add New Customer</h1>
        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>
    </div>
    )
}
export default CustomerAdd;