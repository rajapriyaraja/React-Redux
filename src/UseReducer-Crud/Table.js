import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchTodos, deleteTodo } from './Action';
import { useNavigate, Link } from 'react-router-dom';

import axios from 'axios';

const Table = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const showDialog = (id) => {
    setSelectedUserId(id);
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setSelectedUserId(null);
  };

  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    setDialogVisible(false);
  };

  const handleEdit = (id) => {
    nav(`/user/${id}/edit`);
  };

  return (
    <div>
      <div className='branding'>
        <img
          src='Formlogo.webp'
          alt="image"
          style={{ width: '50px', height: '50px' }}
        />
        <span>Employee Registration</span>
        <Link to="/" className='bwd'>Employee Register Form</Link>
        <Link to="/table" className='process'>Employee Details</Link>
      </div>
      <h1>Employee Details</h1>
      <table className='tables'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr className="data_bds" key={todo.id}>
              <td>{todo.titleOption}</td>
              <td>{todo.namel}</td>
              <td>{todo.roll}</td>
              <td>{todo.email}</td>
              <div className='foot'>
                <button
                  className="delete"
                  onClick={() => showDialog(todo.id)}
                >
                  {/* <FontAwesomeIcon icon={faTrash} /> */}
                </button>
                {/* <button className='delete' onClick={() => handleDelete(todo.id)}><FontAwesomeIcon icon={faTrash} /></button> */}
                <button className='Last' onClick={() => handleEdit(todo.id)}>Edit</button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog open={dialogVisible} className='dailog'>
        <h3>Are you Really want to delete it</h3>
        <button
          className='wx_remove'
          type='button'
          onClick={() => handleDelete(selectedUserId)}>Yes
        </button>
        <button
          type="button"
          className='wx_edit'
          onClick={closeDialog}>No
        </button>
      </dialog>
    </div>
  );
};

export default Table;
