import logo from './logo.svg';
import './App.css';
import Home from './Pages/Header/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Purchase from './Pages/Purchases/Purchase';
import Error from './Pages/Error/Error';
import Tool from './Pages/ToolsName/Tool';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';

import MyReview from './Pages/DashBoard/MyReview';
import Payment from './Pages/Payment/Payment';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import MyProfile from './Pages/DashBoard/MyProfile';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>

        <Route path='/Tool/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path="/DashBoard" element={<RequireAuth><DashBoard /></RequireAuth>}>

          <Route index element={<MyOrders />} />
          <Route path='MyReview'element={<MyReview />}></Route>
          <Route path='MyProfile'element={<MyProfile />}></Route>
          <Route path="Payment/:id" element={<Payment></Payment>}></Route>

        </Route>
        
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
