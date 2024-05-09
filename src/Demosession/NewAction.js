import * as Types from'./NewType'
export const Data={
    user:[],
    name:"",
    age:""
    // password:""
}
export function
 Crud(state,action){
    switch(action.type){
        case Types.NAME:
            return{
                ...state,
                name:action.payload
            };
        
        case Types.AGE:
            return{
                ...state,
                age:action.payload
            };
  
        
        case Types.ADD_USER:
            return{
                ...state,
                user:[...state.user,{name:state.name,age:state.age}],
                name:'',
                age:''
            };
    }
} 



// import * as Types from './ReducerType'

// export const Data={
//     users:[],
//     name:"",
//     password:""
// }
// export function NewReducer(state,action){
//     switch(action.type){
//         case Types.NAME:
//             return {
//               ...state,
//               name: action.payload
//             };
//         case Types.PASSWORD:
//             return {
//               ...state,
//               password: action.payload
//             };
  
        
//         case Types.ADD_USER:
//             return{
//                       ...state,
//                       users: [...state.users,{ name: state.name,password:state.password}],
//                       name: '',
//                       password:''
//     }
// }}