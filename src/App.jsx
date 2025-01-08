import { useState } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmarkItems, setBookmarkItems] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  const handleBookmarks = (blog) => {
    if (!bookmarkItems.includes(blog)) {
      setBookmarkItems([...bookmarkItems, blog]);
    }
  };
  const handleSpentTime = (time) => {
    setSpentTime((prev) => prev + time);
  };
  return (
    <div className="max-w-[1280px] mx-auto px-5">
      <Header />
      <div className="md:flex">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleSpentTime={handleSpentTime}
        />
        <Bookmarks bookmarkItems={bookmarkItems} spentTime={spentTime} />
      </div>
    </div>
  );
}
export default App;
