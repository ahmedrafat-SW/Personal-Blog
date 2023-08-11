import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center">
      <div className="blog-list justify-content-center">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.blogId}>
            <Card className="mb-3" style={{ color: "#000" }}>
              <Card.Body>
                <Link to={`/blogs/${blog.blogId}`}>
                  <h2 className="fs-1 text" style={{ color: "#f1356d" }}>
                    {blog.blogTitle}
                  </h2>
                </Link>
                <Card.Text className="fs-5 text-left">{blog.blogBody}</Card.Text>
                <Card.Subtitle className="fs-4 text" style={{ color: "blue" }}>
                  <span>Written By: </span>
                  <Link to={`/authors/${blog.author.firstName}`}>{blog.author.firstName} { blog.author.lastName}</Link>
                </Card.Subtitle>
                <Row>
                  <Col>
                    <Button
                      onClick={() => {
                        navigate(`/blogs/${blog.blogId}`);
                      }}
                      className="mx-3 mt-4 ml-6"
                      style={{ background: "#D81B60", color: "white", fontSize:"1rem" }}
                    >
                      View
                    </Button>
                  </Col>
                  <Col className="mx-15 mt-4 ml-20">
                    <a href="" className="me-4 ml-10 text-reset">
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href="" className="me-4 text-reset">
                      <MDBIcon fab icon="twitter" />
                    </a>
                    <a href="" className="me-4 text-reset">
                      <MDBIcon fab icon="google" />
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
