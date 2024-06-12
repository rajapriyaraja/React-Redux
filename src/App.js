// import Form from './Todo-List/Form';
// import List from './Todo-List/List';
// import {Context} from './Todo-List/Context';
// import './App.css';
// // import CustomerAdd from './CustomerAdd';
// // import { Navbar } from './Bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// // import {Register} from './Component/Create';
// // import { BrowserRouter as  Route, BrowserRouter, Routes } from 'react-router-dom'
// // import { Create } from './Component/Create';
// // import { Update } from './Component/Update';
// // import { Read } from './Component/Read';
// const App = () => {
//   return (
//   <>
//    <div className='App'>
 
//     {/* <h1>React Redux Customer Example</h1> */}

//    <BrowserRouter>
//    <Context>
//     <Routes>
//     <Route path="/" element={<Form />} />
//       <Route path="/context" element={<List/>}/>
//       <Route path="/form" element={<Form/>}/>
//     </Routes>
//     {/* <Route exact path='/Create' component={Create} /> */}
//     </Context>
//    </BrowserRouter> 
//    {/* <CustomerAdd /> */}
//    {/* <Navbar/>

//    <Route exact path='/Create' component={Create} />
// {/* <Route  path='/read'element={<Read/>}/>
// <Route  path='/update'element={<Update/>}/> */}
// </div>
//    </>        
//   );
// };
// export default App;







// import { RegisterForm } from './UseReducer-Crud/Form';
// import React from 'react'

// function App(){
//   return (
    
// <>
// <RegisterForm/>
// </>  )
// }
// export default App;




import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './UseReducer-Crud/Form';
import Table from './UseReducer-Crud/Table';
import { Update } from './UseReducer-Crud/Update';
import './App.css';

function App() {
  return (
    <div className='main'>
      <h2 className="main-header me-5">Crud Operation</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterForm />} />
          <Route path='/Table' element={<Table />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
