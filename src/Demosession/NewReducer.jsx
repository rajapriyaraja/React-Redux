// import {useReducer} from 'react';
// import {Crud,Data} from './NewAction';
// import * as Types from './NewType'

//   function  Reducer() {
//     const [state,dispatch]=useReducer(Crud, Data);
//     const handleNameChange=(e)=>{
//         dispatch({type:Types.NAME,payload:e.target.value})
//         }
//     const handleAgeChange=(e)=>{
//         dispatch({type:Types.AGE,payload:e.target.value})
//         }
//             const handleAddUser=(e)=>{
//          e.preventDefault();     
//         dispatch({type:Types.ADD_USER})
//         console.log(state)
//         }
//   return (
//     <>
//     <div>
//         <form>
//             <label >Name</label>
//             <input
//             type="text"
//             value={state.name}
//             onChange={handleNameChange}
//             />
//             <label>Age</label>
//             <input
//             type="number"
//             value={state.age}
//             onChange={handleAgeChange}
//             />

//             {/* <label>Password</label>
//             <input
//             type="password"
//             value={state.password}
//             onChange={handlePasswordChange}
//             /> */}
//             <button onClick={handleAddUser}>Submit</button>
//           </form>
//     </div>
//     </>
//   )
// }
// export default Reducer;




// // import React from 'react'

// // export const Reducer = () => {
// //   return (
// //     <div>
// //         <form>
// //             <label>name</label>
// //             <input
// //             type='text'
// //             value={state.name}
// //             onChange={handleNam}/>
// //         </form>
// //     </div>
// //   )
// // }
// // export default Reducer;

