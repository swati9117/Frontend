import React from "react";
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  const handleClose = () => {

    sessionStorage.removeItem("accessToken")
    navigate('/')
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/doctorlist">
                  Doctors
                </a>
              </li>
              { sessionStorage.getItem("accessToken")&&<li class="nav-item">
                <a class="nav-link" href="doctorRegister">
                  Doctors Register
                </a>
              </li>}
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Patient Register
                </a>
              </li> */}
              { !sessionStorage.getItem("accessToken")&&<li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>}
              { sessionStorage.getItem("accessToken")&&<li class="nav-item">
                <a class="nav-link" onClick={handleClose}>Log Out</a>
              </li>}
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
