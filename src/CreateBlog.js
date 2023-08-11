import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { Alert } from "react-bootstrap";
const Create = () => {
  const [blogTitle, setTitle] = useState("");
  const [blogBody, setBody] = useState("");
  const [author, setAuthor] = useState("Select a category");
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  const {
    data: authors,
    isLoading,
    error,
  } = useFetch("http://localhost:8080/api/v1/authors");

  const hendleSubmit = (e) => {
    e.preventDefault();
    const blog = { blogTitle, blogBody, author };
    console.log(blog);
    setIsAdded(true);
    fetch("http://localhost:8080/api/v1/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        setIsAdded(true);
        console.log("Adding New Blog");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setIsAdded(false);
      });
  };

  

  return (
    <div>
        {error && <Alert>{error}</Alert>}
        {authors && 
        <div className="content">
      <div className="create">
        <h2>Add New Blog</h2>
        <form onSubmit={hendleSubmit}>
          <label>Title:</label>
          <input
            className="mb-3"
            type="text"
            required
            value={blogTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body:</label>
          <textarea
            required
            value={blogBody}
            onChange={(e) => setBody(e.target.value)}
          />
          <select >
            <option >Select Author</option>
            {authors.forEach((author) => {
              <option >{author.id}</option>
            })}
          </select>
          {!isAdded && <button>Add Blog</button>}
          {isAdded && <button disabled>Adding Blog</button>}
        </form>
      </div>
    </div>
    }
    </div>
  
  );
};

export default Create;
