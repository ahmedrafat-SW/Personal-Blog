import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Select a category");
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const hendleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    setIsAdded(true);
    fetch("http://localhost:8080/blogs/", {
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
    <div className="d-inline-flex p-2">
      <div className="create ">
        <h2>Add New Blog</h2>
        <form onSubmit={hendleSubmit}>
          <label>Title:</label>
          <input
            // className="mb-3"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="">Select a category</option>
            <option value="ahmed">Ahmed Rafat</option>
            <option value="mohamed">Mohamed Rafat</option>
            <option value="mahmud">Mahmud Rafat</option>
          </select>
          {!isAdded && <button>Add Blog</button>}
          {isAdded && <button disabled>Adding Blog</button>}
        </form>
      </div>
    </div>
  );
};

export default Create;
