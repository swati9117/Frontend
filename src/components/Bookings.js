
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Bookings = () => {
    const location = useLocation();
  console.log(location.state.name)

  const [appointments, setAppointments] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8001/Doctor/${location.state.id}/appointment/`).then((response)=>{
      console.log(response.data)
      setAppointments(response.data)
    })
  },[])
  return (
    <div>
        <div>
            <h2>Welcome {location.state.name}</h2>
        </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Patient Id</th>
      <th scope="col">Doctor Id</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Doctor Name</th>
      <th scope="col">Date</th>
      <th scope="col">Slot</th>
    </tr>
  </thead>
  <tbody>
    { appointments&&appointments.map((value, key)=>{
        return(
            <tr>
      <th scope="row">{value.id}</th>
      <td>{value.patientId}</td>
      <td>{value.doctorId}</td>
      <td>{value.patientName}</td>
      <td>{value.doctorName}</td>
      
      <td>{value.appointmentDate}</td>
      <td>{value.appointment_slot}</td>
    </tr>
        )
    })}
    
  </tbody>
</table>
    </div>
  )
}

export default Bookings