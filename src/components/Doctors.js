import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'



import { useLocation } from 'react-router-dom'



const Doctors = () => {
  const location = useLocation();


    useEffect(()=>{
      
      //console.log("location",location.state)
        axios.get("http://localhost:8002/api/alldocs").then((response)=>{
            setListOfDoctors(response.data)
        })
      },[])
      const [listOfDoctors, setListOfDoctors] = useState([]);
      const navigate = useNavigate();
  return (
    <div>
      <div>
                <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Domain</th>
              
              <th scope="col">Email</th>
              <th scope="col">Booking</th>
            </tr>
          </thead>
          <tbody>
            { listOfDoctors.map((value,key)=>{
                return(
                    <tr>
              <th scope="row">{value.doctorId}</th>
              <td>{value.name}</td>
              <td>{value.specialization}</td>
              
              <td>{value.email}</td>
              <td><button type="button" class="btn btn-primary" onClick={()=>{navigate(`/appointment/${value.doctorId}`,{state:{selectedDoctorDetails:value,userDetails:location.state.userDetails}})}}>Appointment</button></td>
            </tr>
                )
            })}
            
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default Doctors;
