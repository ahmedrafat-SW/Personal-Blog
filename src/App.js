import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";
import Create from "./CreateBlog";
import { About } from "./About";
import { SignUp } from "./SignUp";
import { BlogDetails } from "./BlogDetails";
import { Login } from "./Login";
import Footer from "./BlogFooter";
import Author from "./Author";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex justify-content-center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="author" element={<Author />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
