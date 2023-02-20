import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate();

    const login=()=>{
        const data = { email: email, password:password}
        axios.post("http://localhost:8002/api/login/",data).then((response)=>{
            console.log(data)
            if (response.data.error) {
                alert(response.data.error);
              } else {
                console.log("swati",response.data)
                sessionStorage.setItem("accessToken", response.data.jwt);
                navigate('/bookings',{state: {id: response.data.userDetails.doctorId ,name: response.data.userDetails.doctorName, specialization:response.data.userDetails.doctorSpecialization,jwt:response.data.jwt}})
                console.log(response.data)
              }
        })
    }
  return (
    <div>

<div class="mb-3 row mt-5">
        <label for="email" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="email" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>
      </div>

      <div class="mb-3 row mt-5">
        <label for="doctorName" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" onChange={(event)=>{setPassword(event.target.value)}}/>
        </div>
      </div>

      <button type="button" class="btn btn-primary" onClick={login}>submit</button>

    </div>
  )
}

export default Login
