import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';  
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const AppointmentView = () => {
  const [appointments,setAppointments] = useState([])

    const navigate = useNavigate();
    const location = useLocation();
   

    const [specificDoctor, setSpecificDoctor] = useState({});
    useEffect(()=>{
        console.log("id from storage",sessionStorage.getItem("patientId"))
        let patientId = Number(sessionStorage.getItem("patientId"))
      
      
        axios.get(
            `http://localhost:8001/Patient/${patientId}/appointment/`)
        
        
        .then((response)=>{
            console.log("appointment data",response.data)
            setAppointments(response.data)
        });
      },[]);
       
  return (
    <div>
        <div className='specificDocForm'>
          <div className="formContainer">
            {appointments?.map((item) => (
            <div>
                <div>Appointment Id: {item.id}</div>
                <div>Patient Id: {item.patientId}</div>
                <div>Doctor Id: {item.doctorId}</div>
                <div>Patient Name: {item.patientName}</div>
                <div>Doctor Name: {item.doctorName}</div>
                <div>Appointment Date: {item.appointmentDate}</div>
                <div>Appointment Slot: {item.appointment_slot}</div>
            
            </div>
            ))}
          
             
          </div>
        </div>
    </div>
  );
};

export default AppointmentView