import { CiBookmark } from "react-icons/ci";
function Blog({ blog, handleBookmarks, handleSpentTime }) {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-4 pb-4 border-b-2 space-x-2">
      <div className="w-full h-[250px]">
        <img src={cover} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="flex my-2 justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={author_img} alt="" className="w-[60px] h-[60px]" />
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {reading_time} min read
          <button onClick={() => handleBookmarks(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="font-bold text-4xl leading-loose">{title}</h2>
      {hashtags.map((item, idx) => (
        <a key={idx} className="pe-2">
          {item}
        </a>
      ))}
      <button
        onClick={() => handleSpentTime(reading_time)}
        className="underline block"
      >
        Mark as read
      </button>
    </div>
  );
}
export default Blog;