import SpentTime from "../SpentTime/SpentTime";

function Bookmarks({ bookmarkItems, spentTime }) {
  return (
    <div className="md:w-1/3 ps-6 flex flex-col space-y-5">
      <SpentTime spentTime={spentTime} />
      <div className="bg-[rgba(17,17,17,.05)]">
        <p className="font-bold text-2xl leading-loose px-5 py-4">
          Bookmarked Blogs: {bookmarkItems.length}
        </p>
        <div className="p-5">
          {bookmarkItems.map((item) => (
            <h2
              key={item.id}
              className="p-4 bg-white font-bold text-xl mb-4 leading-loose rounded"
            >
              {item.title}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Bookmarks;