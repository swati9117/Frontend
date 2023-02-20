import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import DoctorRegister from './components/DoctorRegister';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import AppointmentView from './components/AppointmentView';
import Login from './components/Login';
import Bookings from './components/Bookings';
import PatientRegister from './components/PatientRegister';
import PatientLogin from './components/PatientLogin';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/doctorRegister' element={<DoctorRegister/>}></Route>
      <Route path='/doctorlist' element={<Doctors/>}></Route>
      <Route path='/appointment/:docId' element={<Appointment/>}></Route>
      <Route path='/appointmentview' element={<AppointmentView/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/bookings' element={<Bookings/>}></Route>
      <Route path='/PatientRegister' element={<PatientRegister/>}></Route>
      <Route path='/PatientLogin' element={<PatientLogin/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
