// import List from './Operation/List';
// import Form  from './Operation/Form';
// import { Context } from './Operation/Context';
// import './App.css';
// import CustomerAdd from './CustomerAdd';
// import { Navbar } from './Bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Register} from './Component/Create';
// import { BrowserRouter as  Route, BrowserRouter, Routes } from 'react-router-dom'
// import { Create } from './Component/Create';
// import { Update } from './Component/Update';
// import { Read } from './Component/Read';
// const App = () => {
//   return (
//   <>
//    <div className='App'>
//   <BrowserRouter>
//   <Routes>

//     {/* <h1>React Redux Customer Example</h1> */}

//    {/* <BrowserRouter>
//    <Context>
//     <Routes>
//     <Route path="/" element={<Form />} />
//       <Route path="/context" element={<List/>}/>
//       <Route path="/form" element={<Form/>}/>
//     </Routes>
//     </Context>
//    </BrowserRouter> */}
//    {/* <CustomerAdd /> */}
//    {/* <Navbar/> */}

//    <Route exact path='/Create' component={Create} />
// {/* <Route  path='/read'element={<Read/>}/>
// <Route  path='/update'element={<Update/>}/> */}
// </Routes>

// </BrowserRouter>
// </div>
//    </>        
//   );
// };
// export default App;





import { Create } from './Component/Create';
import { Read } from './Component/Read';
import { Update } from './Component/Update';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='main'>
       <h2 className="main-header">React Crud Operations</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/Read' element={<Read />} />
         <Route path='/Update/:id'element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;