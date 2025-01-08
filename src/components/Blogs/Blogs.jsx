import { useEffect, useState } from "react";
import Blog from "./Blog";

function Blogs({ handleBookmarks, handleSpentTime }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div className="md:w-2/3 p-4">
      {blogs.map((item) => (
        <Blog
          key={item.id}
          blog={item}
          handleBookmarks={handleBookmarks}
          handleSpentTime={handleSpentTime}
        />
      ))}
    </div>
  );
}
export default Blogs;