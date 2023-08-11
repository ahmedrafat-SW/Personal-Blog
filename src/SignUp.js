import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {

  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const[errors, setErrors] = useState();
  const navigate = useNavigate();

  const handelSubmit  = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/v1/users/register", {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName,lastName,email,password})
    }).then((response)=>{
      if(response.ok){
        navigate("/");
      }else{
        response.json().then.apply((data)=> {
          setErrors(data);
        })
      }
    }).catch((error)=>{
      console.log(error);
    })
    
  }

  return (
    <form className="flex-auto px-20" onSubmit={handelSubmit}>
      <MDBRow className="ml-20">
        <MDBModalTitle>Sign Up</MDBModalTitle>
      </MDBRow>
      <MDBRow className="mb-3">
        <div className="mb-5 ml-0">
          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </div>
      </MDBRow>
      <MDBRow className="mb-4 mx-20">
        <MDBCol>
          <MDBInput id="firstName" value={firstName} label="First name"  onChange={(e)=> setFirstName(e.target.value)}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id="lastName" value={lastName} label="Last name" onChange={(e)=> setLastName(e.target.value)} />
        </MDBCol>
      </MDBRow>
      {errors && <span>{errors.firstName}</span>}
      <MDBInput
        className="mb-4 mx-20"
        type="email"
        value={email}
        label="Email address"
        onChange={(e)=> setEmail(e.target.value)}
      />
      {errors && <span>{errors.email}</span>}
      <MDBInput
        className="mb-4 mx-20"
        type="password"
        value={password}
        label="Password"
        onChange={(e)=> setPassword(e.target.value)}
      />
      <MDBInput
        className="mb-4 mx-20"
        type="password"
        value={confirmPassword}
        label="Confirm Password"
        onChange={(e)=>{
          if(confirmPassword === password){
            setConfirmPassword(e.target.value);
          }else{
            <span>second password not match</span>
          }
        }}
      />
      {errors && <span>{errors.password}</span>}

      <MDBBtn
        type="submit"
        className="mb-4 mx-20"
        style={{ background: "#f1356d" }}
        block
      >
        Sign Up
      </MDBBtn> 

      <div className="text-center mx-20">
        <p>
          <Link to="/login">Sign In</Link>
        </p>
      </div>
    </form>
  );
};
