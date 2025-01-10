import { useEffect, useState } from "react";
import Blog from "./Blog";
import { getStoredData } from "../../Utils/localStorage";

function Blogs({
  handleBookmarks,
  handleSpentTime,
  setBookmarkItems,
  setSpentTime,
}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const bookmarkData = getStoredData("bookmark");
      const spentTimeData = Number(getStoredData("spentTime"));
      const bookmarkItems = [];
      for (const item of bookmarkData) {
        const theItem = blogs.find((i) => i.id === item);
        if (theItem) {
          bookmarkItems.push(theItem);
        }
      }
      setBookmarkItems(bookmarkItems);
      setSpentTime(spentTimeData);
    }
  }, [blogs]);
  return (
    <div className="md:w-2/3 pe-5 h-[100vh] overflow-y-scroll blogs">
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
