import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';  
import axios from 'axios'
const Appointment = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [disease, setDisease] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const navigate = useNavigate();
    let { docId } = useParams();

    const [specificDoctor, setSpecificDoctor] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5001/doctors/byId/${docId}`).then((response)=>{
            setSpecificDoctor(response.data)
        })
      },[])
      const onSubmit = (data)=>{
        axios.post("http://localhost:5001/appointments",{name: name, age:age, email: email, mobile:mobile, address:address, disease:disease, date:date, time:time ,doctorDoctorId:docId }).then((response)=>{
            console.log("Submitted")
            alert("Successfully Appointment Submitted!")
            navigate('/')
          })
      }
  return (
    <div>
        <div className='specificDocForm'>
          <div className="formContainer">
            <label>Name: </label>
            <input type="text" id='inputAppointment' placeholder="Name" autoComplete="off" onChange={(event)=>{setName(event.target.value)}}/>

            <label>Age: </label>
            <input type="text" id='inputAppointment' placeholder="Age" autoComplete="off" onChange={(event)=>{setAge(event.target.value)}}/>

            <label>Email: </label>
            <input type="email" id='inputAppointment' placeholder="example@gmail.com" autoComplete="off" onChange={(event)=>{setEmail(event.target.value)}}/>
            
            <label>Mobile: </label>
            <input type="text" id='inputAppointment' placeholder="Mobile No." autoComplete="off" onChange={(event)=>{setMobile(event.target.value)}}/>

            <label>Address: </label>
            <input type="text" id='inputAppointment' placeholder="Address" autoComplete="off" onChange={(event)=>{setAddress(event.target.value)}}/>

            <label>Query: </label>
            <input type="text" id='inputAppointment' placeholder="Disease" autoComplete="off" onChange={(event)=>{setDisease(event.target.value)}}/>

            <label>Date: </label>
            <input type="date" id='inputAppointment' className="form-control" name="dateTime" required onChange={(event)=>{setDate(event.target.value)}}/>

            <label>Time: </label>
            <input type="time" id='inputAppointment' className="form-control" name="dateTime" required onChange={(event)=>{setTime(event.target.value)}}/>

            <button type="button" class="btn btn-primary" onClick={onSubmit}>submit</button>
          </div>
        </div>
    </div>
  )
}

export default Appointment