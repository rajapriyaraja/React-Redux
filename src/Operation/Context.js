import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Reducer, InitialState } from './Reducer';
import * as Types from './Type';


export const TableContext = createContext();

export const Context = ({ children }) => {
    const nav = useNavigate();
    const [state, dispatch] = useReducer(Reducer, InitialState);

    const handleAddUser = () => {
        if (state.name.trim() === '' || state.password.trim() === '') {
            return;
        }
        dispatch({ type: Types.FORM_SUBMIT });
        nav("/context");
    };

    const handleUpdateUser = () => {
        dispatch({ type: Types.UPDATE_USER });
        nav("/context");
    };

    const handleNameChange = (e) => {
        dispatch({ type: Types.USER_NAME, payload: e.target.value });
    };

    const handlePasswordChange = (e) => {
        dispatch({ type: Types.USER_PASSWORD, payload: e.target.value });
    };
    
    const handleDeleteUser = (id)=> {
        dispatch({ type: Types.DELETE_USER, payload: id });
    };

    const handleEditUser = (user) => {
        dispatch({ type: Types.EDIT_USER, payload: { name: user.name, password: user.password, user } });
        nav('/form')
    };

    return (
        <TableContext.Provider value={{ state, handleAddUser, handleUpdateUser, handleNameChange, handlePasswordChange,handleEditUser, handleDeleteUser }}>
            {children}
        </TableContext.Provider>
    );
};