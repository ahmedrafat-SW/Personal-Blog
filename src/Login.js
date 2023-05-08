import {
  MDBBtn,
  MDBInput,
  MDBModalTitle,
  MDBRow,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <form>
      <MDBRow className="mb-4">
        <MDBModalTitle>Sign In</MDBModalTitle>
      </MDBRow>
      <MDBRow className="mb-4">
        <MDBInput
          //   className="mb-4"
          type="email"
          id="form3Example3"
          label="Email address"
        />
        <MDBRow className="mb-4"></MDBRow>
        <MDBInput
          //   className="mb-4"
          type="password"
          id="form3Example3"
          label="Password"
        ></MDBInput>
      </MDBRow>
      <MDBRow>
        <MDBCheckbox
          wrapperClass="d-flex justify-content-left mb-2 ml-4"
          id="form3Example5"
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
