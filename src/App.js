import './index.css';
import User from './server/models/User';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { About } from './components/About';
import Login from './components/Login';
import Hire from './components/Hire';
import Combo from './components/Combo';
import Job from './components/Job';
import Apply from './components/Apply';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import './App.css'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/resetpassword'element={<ResetPassword/>}/>
      <Route path='/ForgetPassword' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/combo'element={<Combo/>}/>
          <Route path='/hire'element={<Hire/>}/>
          <Route path='/job' element={<Job/>}/>
          <Route path='/apply' element={<Apply/>}/>
      </Routes>
    </>
  );
}

export default App;
