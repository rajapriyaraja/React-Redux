import axios from 'axios';
import {CREATE,POST,GET,FETCH,FETCH_ID} from './Type';

export const createTodo = (todo) => {
  return async (dispatch) => {
    const response = await axios.post(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/StudentRegistration`, todo);
    dispatch({ type: CREATE, payload: response.data });
  };
};

export const updateTodo = (id, todo) => {
  return async (dispatch) => {
    const response = await axios.put(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/StudentRegistration/${id}`, todo);
    dispatch({ type: POST, payload: response.data });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await axios.delete(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/StudentRegistration/${id}`);
    dispatch({ type: FETCH_ID, payload: id });
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await axios.get(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/StudentRegistration`);
    dispatch({ type: GET, payload: response.data });
  };
};

export const fetchTodo = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/StudentRegistration/${id}`);
    dispatch({ type: FETCH, payload: response.data });
  };
};
