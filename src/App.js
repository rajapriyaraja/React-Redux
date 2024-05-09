import List from './Operation/List';
import Form  from './Operation/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from './Operation/Context';
import './App.css';
import CustomerAdd from './CustomerAdd';

const App = () => {
  return (
  <>
  <div className='App'>
    <h1>React Redux Customer Example</h1>
  </div>
   {/* <BrowserRouter>
   <Context>
    <Routes>
    <Route path="/" element={<Form />} />
      <Route path="/context" element={<List/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
    </Context>
   </BrowserRouter> */}
   <CustomerAdd />

   </>        
  );
};
export default App;





















// // // import Crud from "./Crud_Component/Crud";
// // // import Reducer from "./Demosession/Reducer";
// // import Reducer from "./Demosession/NewReducer";
// // const App = () => {
// //   return (
// //   <>
// //          {/* <Reducer /> */}
// //     </>
// //   );
// // };
// // export default App;



// import ContextList from './components/ContextList';
// import Form  from './components/Form';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import C

// const App = () => {
//   return (
//   <>
//    <BrowserRouter>
//    <Context>
//     <Routes>
//     <Route path="/" element={<Form />} />
//       <Route path="/context" element={<ContextList/>}/>
//       <Route path="/form" element={<Form/>}/>
//     </Routes>
//     </Context>
//    </BrowserRouter>
//    </>        
//   );
// };

// export default App;