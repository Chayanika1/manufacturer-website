import logo from './logo.svg';
import './App.css';
import Home from './Pages/Header/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Purchase from './Pages/Purchases/Purchase';
import Error from './Pages/Error/Error';
import Tool from './Pages/ToolsName/Tool';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Tool' element={<Tool></Tool>}></Route>
        <Route path='/Tool/:id' element={<Purchase></Purchase>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
      
     
    </div>
  );
}

export default App;