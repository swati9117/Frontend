import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';  
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Appointment = () => {
  const location = useLocation();
    const [id, setId] = useState(location.state.userDetails.patientId);
    const [patientId, setPatientId] = useState(location.state.userDetails.patientId);
    const [doctorId, setDoctorId] = useState(location.state.selectedDoctorDetails.id);
    const [patientName, setPatientName] = useState(location.state.userDetails.patientName);
    const [doctorName, setDoctorName] = useState("");
    //const [email, setEmail] = useState("");
    const [appointmentDate, setDate] = useState("");
    const [appointment_slot, setTime] = useState("");

    const navigate = useNavigate();
    let { docId } = useParams();

    const [specificDoctor, setSpecificDoctor] = useState({});
    useEffect(()=>{
      console.log("swa",location.state.selectedDoctorDetails)
      
        axios.get(`http://localhost:8001/Patient/${location.state.id}/appointment/`).then((response)=>{
            setSpecificDoctor(response.data)
        })
      },[])
       const onSubmit = (data)=>{
         axios.post("http://localhost:8001/appointment_details/",{id:id, patientId:patientId,doctorId:doctorId,patientName:patientName, doctorName:doctorName, appointmentDate:appointmentDate ,appointment_slot:appointment_slot }).then((response)=>{
          
             console.log("Submitted")
             alert("Successfully Appointment Submitted!")
             navigate('/')
           })
       }
  return (
    <div>
        <div className='specificDocForm'>
          <div className="formContainer">
          <label>Id: </label>
            <input type="text" id='inputAppointment' placeholder="id" value = {location.state.userDetails.patientId}  autoComplete="off" onChange={(event)=>{setId(event.target.value)}}/>

            <label>Patient Id: </label>
            <input type="text" id='inputAppointment' placeholder="id" value = {location.state.userDetails.patientId}  autoComplete="off" onChange={(event)=>{setPatientId(event.target.value)}}/>

            <label>Doctor Id: </label>
            <input type="text" id='inputAppointment' placeholder="id"   autoComplete="off" onChange={(event)=>{setDoctorId(event.target.value)}}/>


            <label>Patient Name: </label>
            <input type="text" id='inputAppointment' placeholder="Patient Name" value = {location.state.userDetails.patientName}  autoComplete="off" onChange={(event)=>{setPatientName(event.target.value)}}/>

            <label>Doctor Name: </label>
            <input type="text" id='inputAppointment' placeholder="Doctor Name" value = {location.state.selectedDoctorDetails.doctorName} autoComplete="off" onChange={(event)=>{setDoctorName(event.target.value)}}/>
            
            

            

            <label>Date: </label>
            <input type="" id='inputAppointment' className="form-control" name="dateTime" required onChange={(event)=>{setDate(event.target.value)}}/>

            <label>Slot: </label>
            <input type="text" id='inputAppointment' className="form-control" name="dateTime" required onChange={(event)=>{setTime(event.target.value)}}/>

             <button type="button" class="btn btn-primary" onClick={onSubmit}>submit</button> 
          </div>
        </div>
    </div>
  )
}

export default Appointment