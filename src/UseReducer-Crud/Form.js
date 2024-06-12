import React, { useState } from 'react'
import { useDispatch } from 'react-router-dom';
import { createTodo } from './Action';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
    const [namel,setNamel]=useState();
    const [roll,setRoll]=useState();
    const [email,setEmail]=useState();
    
    const dispatch=useDispatch();
    const nav=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(createTodo({
            namel,roll,email
          }))
        // console.log(namel)
        // console.log(email)
        // console.log(roll)
    }
    const Reset=()=>{
        setEmail("")
        setNamel("")
        setRoll("")
    }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name</label>
            <input
            value={namel}
            placeholder='Enter your name'
            onChange={(e)=>setNamel(e.target.value)}
            />
            </div>
            <div>
            <label>Roll No</label>
            <input
            value={roll}
            placeholder='Enter your Roll Number'
            onChange={(e)=>setRoll(e.target.value)}
            />
            </div>
            <div>
            <label>Email</label>
            <input
            value={email}
            placeholder='Enter your Email'
            onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div>
                <button type='submit'>Submit</button>
                <button 
                type='reset'
                onClick={Reset}>Reset</button>
            </div>
        </form>
    </div>
    </>
  )
}