import {useContext,createContext} from "react";
import * as Type from './Data';
export const TableEditer=createContext();







// // // context.js
// // import React, { createContext, useContext, useReducer } from 'react';

// // // Initial state
// // const initialState = {
// //   items: [],
// // };

// // // Create context
// // const AppContext = createContext();

// // // Reducer function
// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case 'ADD_ITEM':
// //       return {
// //         ...state,
// //         items: [...state.items, action.payload],
// //       };
// //     case 'REMOVE_ITEM':
// //       return {
// //         ...state,
// //         items: state.items.filter(item => item.id !== action.payload),
// //       };
// //     case 'UPDATE_ITEM':
// //       return {
// //         ...state,
// //         items: state.items.map(item =>
// //           item.id === action.payload.id ? action.payload : item
// //         ),
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // // Context provider component
// // export const AppProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(reducer, initialState);

// //   return (
// //     <AppContext.Provider value={{ state, dispatch }}>
// //       {children}
// //     </AppContext.Provider>
// //   );
// // };

// // // Custom hook to use the context
// // export const useAppContext = () => useContext(AppContext);
















// import * as Types from "./Type";

// export const InitialState = {
//     users: [],
//     name: '',
//     password: '',
//     selectedUser: null
// };

// export function Reducer(state, action) {
//     switch (action.type) {
//         case Types.USER_NAME:
//             return {
//                 ...state,
//                 name: action.payload
//             };

//         case Types.USER_PASSWORD:
//             return {
//                 ...state,
//                 password: action.payload
//             };

//         case Types.FORM_SUBMIT:
//             return {
//                 ...state,
//                 users: [...state.users, { id: Date.now(), name: state.name, password: state.password }],
//                 name: '',
//                 password: ''
//             };

//         case Types.DELETE_USER:
//             return {
//                 ...state,
//                 users: state.users.filter(user => user.id !== action.payload)
//             };

//         case Types.EDIT_USER:
//             return {
//                 ...state,
//                 name: action.payload.name,
//                 password: action.payload.password,
//                 selectedUser: action.payload.user
//             };

//         case Types.UPDATE_USER:
//             return {
//                 ...state,
//                 users: state.users.map(user => (user.id === state.selectedUser.id ? { ...user, name: state.name, password: state.password } : user)),
//                 name: '',
//                 password: '',
//                 selectedUser: null
//             };
//         default:
//             return state;
//     }
// }