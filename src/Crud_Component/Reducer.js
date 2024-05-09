// import { DELETE_USER,USER_NAME,USER_PASSWORD,EDIT_USER,FORM_SUBMIT,UPDATE_DATA } from "./Action";

// function Reducer( state,action ) {

//     switch( action.type ){

//         case USER_NAME:
//             return {
//                 ...state,
//                 userName:action.data
//             };

//         case USER_PASSWORD:
//             return {
//                 ...state,
//                 userPassword:action.data
//             };
        
//         case FORM_SUBMIT:
//             return {
//                 ...state,
//                 user:[...state.user,
//                     { 
//                       userName: state.userName,
//                       userPassword:state.userPassword
//                     }
//                 ],
//                 userName:"",
//                 userPassword:""
//             };
        
//         case DELETE_USER:
//             return {
//                   ...state,
//                   user: action.data,
//             };

        
//         case EDIT_USER:
//             return {
//                   ...state,
//                   userName: action.data.userName,
//                   userPassword: action.data.userPassword,
//                   editingIndex: action.data.index,
//             };

//         case UPDATE_DATA:
//             return{
//                 ...state,
//                 user:action.data
//             }
//         default:
//             return;
//     };
// };

// export default Reducer;