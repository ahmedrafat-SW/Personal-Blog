import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { MDBRow, MDBBtn, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const {
    data: blogs,
    isLoading: loading,
    error,
  } = useFetch("http://localhost:8080/api/v1/blogs");

  return (
    <div>
      <Container className="main-container">
        {error && <Alert>{error}</Alert>}
        {loading && <Alert> Looding ...... </Alert>}
        {blogs && <BlogList blogs={blogs} />}
        {blogs && (
          <Container className="mt-40">
            <form action="">
              <MDBRow>
                <MDBCol size="auto" className="mb-4 mb-md-0">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>
                <MDBCol md="5" size="12" className="mb-4 mb-md-0">
                  <MDBInput
                    type="text"
                    id="email"
                    label="Email address"
                  />
                </MDBCol>
                <MDBCol size="auto" className="mb-4 mb-md-0">
                  <MDBBtn>Subscribe</MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </Container>
        )}
      </Container>
    </div>
  );
};
