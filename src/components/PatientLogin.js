import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import PatientRegister from './PatientRegister'

const PatientLogin = () => {
    
    
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const onSubmit = (data)=>{
      axios.post("http://localhost:8000/api/login/",{email: email, password: password}).then((response)=>{
            
      console.log("shh",response.data)
      sessionStorage.setItem("patientId", response.data.userDetails.patientId);
       alert("Successfull")
          navigate('/doctorlist',{state:{jwt:response.data.jwt,userDetails:response.data.userDetails}})
         
    
      })      
    
    }


    return(
        <div>
      
      
      <div class="mb-3 row">
        <label for="email" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="email" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" onChange={(event)=>{setPassword(event.target.value)}}/>
        </div>
      </div>
      <button class="btn btn-outline-success" type="submit" onClick={onSubmit}>
                Login
              </button>
        <div>Don't have account?</div>
        
        <button onClick = {() =>navigate('/PatientRegister')}> Register </button>
    </div>
  );
};
    
    


export default PatientLogin 