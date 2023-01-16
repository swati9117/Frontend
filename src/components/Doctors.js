import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Doctors = () => {


    useEffect(()=>{
        axios.get("http://localhost:5001/doctors").then((response)=>{
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
              <th scope="col">Experience</th>
              <th scope="col">Email</th>
              <th scope="col">Booking</th>
            </tr>
          </thead>
          <tbody>
            { listOfDoctors.map((value,key)=>{
                return(
                    <tr>
              <th scope="row">{value.doctorId}</th>
              <td>{value.doctorName}</td>
              <td>{value.doctorSpecialization}</td>
              <td>{value.doctorExperience}</td>
              <td>{value.doctorEmail}</td>
              <td><button type="button" class="btn btn-primary" onClick={()=>{navigate(`/appointment/${value.doctorId}`)}}>Appointment</button></td>
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
