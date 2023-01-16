
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Bookings = () => {
    const location = useLocation();
  console.log(location.state.name)

  const [appointments, setAppointments] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:5001/appointments/${location.state.id}`).then((response)=>{
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
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Patient's Request</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    { appointments&&appointments.map((value, key)=>{
        return(
            <tr>
      <th scope="row">{value.appointmentId}</th>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td>{value.email}</td>
      <td>{value.disease}</td>
      <td>{value.date}</td>
      <td>{value.time}</td>
    </tr>
        )
    })}
    
  </tbody>
</table>
    </div>
  )
}

export default Bookings