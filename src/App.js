import logo from './logo.svg';
import './App.css';
import Home from './Pages/Header/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
      
     
    </div>
  );
}

export default App;
