import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import DoctorRegister from './components/DoctorRegister';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Login from './components/Login';
import Bookings from './components/Bookings';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/doctorRegister' element={<DoctorRegister></DoctorRegister>}></Route>
      <Route path='/doctorlist' element={<Doctors></Doctors>}></Route>
      <Route path='/appointment/:docId' element={<Appointment></Appointment>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/bookings' element={<Bookings></Bookings>}></Route>
    </Routes>
    </div>
  );
}

export default App;
