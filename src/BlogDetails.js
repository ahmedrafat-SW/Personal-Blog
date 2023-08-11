import { Button, Alert, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Commint from "./CommintSection";
export const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8080/api/v1/blogs/" + id);

  return (
    <div className="content" >
      {isLoading && <Alert> Loading .... </Alert>}
      {error && <Alert> {error.message} </Alert>}
      {blog && (
        <Card>
          <article>
            <h1 style={{ color: "blueviolet" , marginBottom:30, marginTop:20}}>
              {blog.blogTitle}
             <div className="mr-0">
                <MDBBtn floating color="secondary" size="lg" className="me-4 ml-10 text-reset">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn floating color="secondary"  size="lg" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
             </div>
            </h1>
            <div style={{fontSize: "1.39rem"}}>
              <p style={{textAlign:"left", alignContent:"center" , marginInline:40}}>{blog.blogBody}</p>
              </div>
            <div style={{ marginTop: 40 }}>
              <Button
                onClick={()=>{
                  navigate(`/authors/${blog.author.firstName}`)
                }}
                style={{fontSize:"1rem", backgroundColor:"#f1356d"}}
                className="mt-8 ml-5"
              >
                Author Profile
              </Button>
            </div>
          </article>
          <Commint />
        </Card>
      )}
    </div>
  );
};
