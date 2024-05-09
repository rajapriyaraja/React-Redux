import React, { useContext} from 'react';
import { TableContext } from './Context';

// import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const { state, handleAddUser, handleUpdateUser, handleNameChange, handlePasswordChange } = useContext(TableContext);
    
    return (
        <div className="ccontainer">
            <div className='ccontainer'>
                <label>Name</label>
                <input
                    type="text"
                    value={state.name}
                    onChange={handleNameChange}
                    placeholder="Enter Name"
                    // className='py-2 my-2 rounded'
                />
                <label >Password</label>
                <input
                    type="password"
                    value={state.password}
                    onChange={handlePasswordChange}
                    placeholder="Enter Password"
                    // className='py-2 my-2 rounded'
                />
                <button className="" onClick={state.selectedUser ? handleUpdateUser : handleAddUser}>
                    {state.selectedUser ? 'Update User' : 'Add User'}
                </button>
            </div>
        </div>
    );
};

export default Form;