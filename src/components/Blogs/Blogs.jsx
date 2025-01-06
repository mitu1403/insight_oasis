import { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs)
  return <div>Blogs</div>;
}
export default Blogs;
