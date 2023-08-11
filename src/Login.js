import {
  MDBBtn,
  MDBInput,
  MDBModalTitle,
  MDBRow,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import React ,{ useState } from "react";

export const Login = () => {
  
  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[errors, setErrors] = useState({});

  const handleSubmit = (e) =>{
    e.preventDefault();

    fetch('http://localhost:8080/api/v1/login',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({email, password})
    }).then((response)=> {
      if(response.ok){
          navigate("/");
      }else{
        response.json().then((data)=>{
          setErrors(data);
        })
      }
    }).catch((error)=> {
      console.log(error);
    })

  }
  return (
    <form onSubmit={handleSubmit}>
      <MDBRow className="mb-4">
        <MDBModalTitle>Sign In</MDBModalTitle>
      </MDBRow>
      <MDBRow className="mb-4">
        <MDBInput
          //   className="mb-4"
          type="email"
          value={email}
          label="Email address"
          onChange={(e)=> setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
        <MDBRow className="mb-4"></MDBRow>
        <MDBInput
          //   className="mb-4"
          type="password"
          value={password}
          label="Password"
          onChange={(e)=> setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </MDBRow>
      <MDBRow>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-left mb-2 ml-4"
          label="Stay Login"
          defaultChecked
        />
      </MDBRow>
      <MDBRow>
        <MDBBtn type="submit" style={{ background: "#f1356d" }}>
          Sign In
        </MDBBtn>
      </MDBRow>
      <MDBRow>
        <p className="mt-4 ml-40">
          <Link to="/signup">Create new Account</Link>
        </p>
      </MDBRow>
      <MDBRow>
        <p className="mt-4 ml-40">
          {" "}
          or Sign in with:
          <MDBBtn
            floating
            color="secondary"
            className="ml-2
          "
            size="sm"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn
            floating
            color="secondary"
            className="ml-2
          "
            size="sm"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            color="secondary"
            className="ml-2
          "
            size="sm"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </p>
      </MDBRow>
    </form>
  );
};
