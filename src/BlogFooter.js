import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="light"
      style={{ marginTop: "auto" }}
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mb-5">
            <div className="me-5 d-2 d-lg-block">
              <span style={{marginInline: 32}}>Get connected with us on social networks:</span>

              <a href="" className="me-4 ml-10 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 mb-2"
        style={{ backgroundColor: "rgba(241,53,109)" }}
      >
        Copyright © 2023:  
        <a className="text-reset fw-bold" href="#">
          Blog.dev
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
