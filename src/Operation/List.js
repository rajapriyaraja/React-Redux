import React, { useContext } from 'react';
import { TableContext } from './Context';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = () => {
    const nav=useNavigate();
    const { state,handleEditUser,handleDeleteUser } = useContext(TableContext);
    const Back=()=>{
        nav("/form")

    }
    return (
        <div>
            
            <h2 className='mt-5 text-center'>User List</h2>
            <table className='mt-5 table table-bordered container col-5 table-striped'>
                <thead className='text-center'>
                    <tr>
                        <th className='text-bg-secondary'>Name</th>
                        <th className='text-bg-secondary'>Password</th>
                        <th className='text-bg-secondary'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {state.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className="btn btn-dark me-2" onClick={() => handleEditUser(user)}>Edit</button>
                                <button className='btn btn-info' onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button class="btn btn-primary mx-5 px-4"onClick={Back}>Back</button>
        </div>
    );
};

export default List;