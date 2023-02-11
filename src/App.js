import React from 'react';
import Home from './components/Home/Home';
import About from './components/about/About';
import Brand from './components/brand/Brand';
import Blogs from './components/blog/Blog';
import Car from './components/car/car'
import Team from './components/team/Team'
import Video from './components/video/Video';
import Signup from './components/signup/signup';
import Verify from './components/verify/verify';
import MainScreen from './components/mainscreen/MainScreen';
import Payment  from './components/payment_page/payment';
import AdminSignin from './components/admin/adminLogin';
import AdminHome from './components/admin/adminHome';
import ForgetPassword from './components/forgetPassword/forgetPassword'
import ResetPassword from './components/ResetPassword/Rpass'
import OTP from './components/OTP/OTP'
// import Contact from './components/contact/Contact'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Welcome from './components/welcome/welcome';
import PrivateRoute from './routing/PrivateRoutes';

function App() {


  return (
    <>
      <Router>

        {/* <Routes>
          <PrivateRoute path="/" element={MainScreen}/>
        </Routes> */}
        <Routes>
        <Route path='/welcome' element={<Welcome />} />
          <Route path='/' element={<Welcome />} />
          {/* <Route exact path='/welcome' element={<Welcome />} /> */}

        </Routes>

        {/* <Routes>
          <Route path='/' element={<Video />} />
        </Routes> */}
        <Routes>
          <Route exact path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path='/verify' element={<Verify />} />
        </Routes>
        <Routes>
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
        <Routes>
        <Route exact path='/payment' element={<Payment />} />
        </Routes>
        <Routes>
        <Route exact path='/admin/login' element={<AdminSignin />} />
        </Routes>
        <Routes>
        <Route exact path='/forgetPassword' element={<ForgetPassword/>} />
        </Routes>
        <Routes>
        <Route exact path='/admin/home' element={<AdminHome />} />
        </Routes>
        <Routes>
        <Route exact path='/Rpass' element={<ResetPassword />} />
        </Routes>
        <Routes>
        <Route exact path='/OTP' element={<OTP />} />
        </Routes>
        {/* <Routes>
          <Route path='/' element={<Car />} />
        </Routes> */}
        {/* <Routes>
          <Route path='/' element={<Brand />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Car />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Blogs />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Team />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Footer />} />
        </Routes> */}

      </Router>

    </>
  );
}

export default App;
