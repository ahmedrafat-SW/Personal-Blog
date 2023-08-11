 import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
const Author = () => {
  const { firstName } = useParams();
  const {
    data: author,
    isLoading,
    error,
  } = useFetch("http://localhost:8080/api/v1/authors/name/"+firstName )
  return (
    <div>
        {isLoading && <Alert> Loading .... </Alert>}
        {error && <Alert> {error.message} </Alert>}
        {author &&
        <section
      className=" vh-70 vw-100 "
    >
      <MDBContainer className="vh-70">
        <MDBRow
          className="justify-content-center align-items-center"
        >
          <MDBCol >
            <MDBCard className="mb-3">
              <MDBRow>
                <MDBCol
                  md="3"
                  className="gradient-custom text-center text-white"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                    alt="Avatar"
                    style={{ width: "100px" , marginTop:100, marginBottom:50}}
                    
                  />
                  <h4 tag="h5"> {author.firstName} {author.lastName} </h4>
                  <h5>{author.jobTitle}</h5>
                </MDBCol>
                <MDBCol>
                    <h5 style={{marginTop:40 , fontSize:"1.4rem" }} >Bio</h5>
                    <hr />
                  <MDBCardBody>
                    <MDBTypography style={{fontSize:"1.3rem", textAlign:"left"}}>
                    <p>{author.bio}</p>
                    </MDBTypography>
                    <hr />
                    <h4 style={{marginTop:40 , fontSize:"1.4rem" }} >Contact Info</h4 >
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                        {author.email}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">
                          {author.phone}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!">
                        <MDBIcon fab icon="facebook me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="twitter me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="instagram me-3" size="lg" />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    }
    </div>
   );
};

export default Author;
