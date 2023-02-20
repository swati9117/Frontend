import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import PatientLogin from './PatientLogin'


const PatientRegister = () => {
    const [name, setName] = useState();
    
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const onSubmit = (data)=>{
      axios.post("http://localhost:8000/api/register/",{name: name, email: email, password: password}).then((response)=>{
            
          console.log("swa",data)
           alert("Successfully User Created!")

            
         
           
            
        })
      
            
         
           
            
    
    }


    return(
        <div>
      <div class="mb-3 row mt-5">
        <label for="name" class="col-sm-2 col-form-label">
          Name
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="name" onChange={(event)=>{setName(event.target.value)}}/>
        </div>
      </div>
      
      
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
                Submit
              </button>
        <div>Already Registered?</div>
        <button onClick = {() =>navigate('/PatientLogin')}> login </button>
    </div>
  );
};
    
    


export default PatientRegister 