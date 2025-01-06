function Blog({ blog }) {
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
    <div className="mb-4">
      <div className="w-full">
        <img src={cover} alt="" className="w-full h-full"/>
      </div>
      <div className="flex my-2 justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={author_img} alt="" className="w-[60px] h-[60px]"/>
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        {reading_time} min read
      </div>
      <h2 className="font-bold text-4xl leading-loose">{title}</h2>
      {hashtags.map((item,idx) => (
        <a key={idx} className="pe-2">{item}</a>
      ))}
    </div>
  );
}
export default Blog;