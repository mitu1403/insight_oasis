import { useEffect, useState } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
// import { getStoredBookmark, addToLocalStorage } from "./Utils/localStorage";
import { getStoredData, addToLocalStorage } from "./Utils/localStorage";

function App() {
  const [bookmarkItems, setBookmarkItems] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  const handleBookmarks = (blog) => {
    if (!bookmarkItems.includes(blog)) {
      setBookmarkItems([...bookmarkItems, blog]);
      addToLocalStorage(blog.id, 'bookmark')
    }
  };
  const handleSpentTime = (time, blog) => {
    setSpentTime((prev) => prev + time);
    addToLocalStorage(time, 'spentTime')
    const remainingBookmarkItem = bookmarkItems.filter(
      (item) => item.id != blog.id
    );
    setBookmarkItems(remainingBookmarkItem);
  };
  // useEffect(() =>{
  //   const data = getStoredBookmark();
  //   console.log(data)
  // },[])
  return (
    <div className="max-w-[1280px] mx-auto px-5 parent-scrollbar">
      <Header />
      <div className="md:flex py-4">
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
