import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <form className="mx-20">
      <MDBRow className="ml-20">
        <MDBModalTitle>Sign Up</MDBModalTitle>
      </MDBRow>
      <MDBRow className="mb-3">
        <div className="mb-5 ml-40">
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
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput id="form3Example1" label="First name" />
        </MDBCol>
        <MDBCol>
          <MDBInput id="form3Example2" label="Mid name" />
        </MDBCol>
        <MDBCol>
          <MDBInput id="form3Example2" label="Last name" />
        </MDBCol>
      </MDBRow>
      <MDBInput
        className="mb-4"
        type="email"
        id="form3Example3"
        label="Email address"
      />
      <MDBInput
        className="mb-4"
        type="password"
        id="form3Example4"
        label="Password"
      />
      <MDBInput
        className="mb-4"
        type="password"
        id="form3Example4"
        label="Confirm Password"
      />

      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-4"
        id="form3Example5"
        label="Subscribe to our newsletter"
        defaultChecked
      />

      <MDBBtn
        type="submit"
        className="mb-4"
        style={{ background: "#f1356d" }}
        block
      >
        Sign Up
      </MDBBtn>

      <div className="text-center">
        <p>
          <Link to="/login">Sign In</Link>
        </p>
      </div>
    </form>
  );
};
