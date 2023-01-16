import React, { useState } from "react";
import axios from 'axios'

const DoctorRegister = () => {

    const [name, setName] = useState();
    const [domain, setDomain] = useState();
    const [experience, setExperience] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onSubmit = (data)=>{
        axios.post("http://localhost:5001/doctors",{doctorName: name, doctorSpecialization: domain, doctorExperience: experience, doctorEmail: email, doctorPassword: password}).then((response)=>{
            console.log(data)
            alert("Successfully Doctor Created!")
        })
    }

  return (
    <div>
      <div class="mb-3 row mt-5">
        <label for="doctorName" class="col-sm-2 col-form-label">
          Name
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="doctorName" onChange={(event)=>{setName(event.target.value)}}/>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="doctorSpecialization" class="col-sm-2 col-form-label">
          Domain
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="doctorSpecialization" onChange={(event)=>{setDomain(event.target.value)}}/>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="doctorExperience" class="col-sm-2 col-form-label">
          Experience
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="doctorExperience" onChange={(event)=>{setExperience(event.target.value)}}/>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="doctorEmail" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="doctorEmail" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="doctorPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="doctorPassword" onChange={(event)=>{setPassword(event.target.value)}}/>
        </div>
      </div>
      <button class="btn btn-outline-success" type="submit" onClick={onSubmit}>
                Submit
              </button>
    </div>
  );
};

export default DoctorRegister;
