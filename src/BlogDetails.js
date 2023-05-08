import { Button, Col, Alert, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Commint from "./CommintSection";
export const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8080/blogs/" + id);

  const handleDelete = () => {
    fetch(`http://localhost:8080/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const handleEdit = () => {
    navigate(`/edit/${blog.id}`);
  };

  return (
    <div className="content" style={{ maxInlineSize: 1200 }}>
      {isLoading && <Alert> Loading .... </Alert>}
      {error && <Alert> {error.message} </Alert>}
      {blog && (
        <Card>
          <article>
            <h2 style={{ color: "#f1356d" }}>{blog.title}</h2>
            <p style={{ color: "blueviolet" }}>
              Written by {blog.author}
              <MDBBtn floating color="secondary" className="ml-60" size="sm">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn floating color="secondary" className="ml-2" size="sm">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
            </p>
            <div>{blog.body}</div>
            <div style={{ marginTop: 20 }}>
              <Button
                className="btn btn-secondary ml-40 mt-8 mr-5"
                style={{ marginInline: 20 }}
              >
                <MDBIcon fas icon="edit" className="mr-2" />
                Edit
              </Button>
              <Button
                style={{ marginInline: 20 }}
                className="btn btn-danger mt-8 ml-5"
                onClick={handleDelete}
              >
                <MDBIcon fas icon="trash" className="mr-2" />
                Delete
              </Button>
            </div>
          </article>
          <Commint />
        </Card>
      )}
    </div>
  );
};
