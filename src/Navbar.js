import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Person Blog</h1>
      </Link>
      <div className="d-xxl-inline-flex">
        <Link to="/"> Home </Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
        <Link to="/about"> About </Link>
        <Link style={{ marginRight: 50 }} to="/signup">
          {" "}
          SignUp{" "}
        </Link>
      </div>
    </nav>
  );
};
