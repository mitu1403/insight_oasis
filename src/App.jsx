import Header from "./components/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"

function App() {

  return (
    <div className="container mx-auto px-5">
      <Header/>
      <div className="md:flex">
        <Blogs/>
        <Bookmarks/>

      </div>
    </div>
  )
}

export default App
