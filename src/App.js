import logo from './logo.svg';
import './App.css';
import Home from './Pages/Header/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
