import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div>
      <div className="w-full h-[98px] my-5 rounded-lg font-bold text-2xl bg-[#fff] p-[20px] border-2 border-indigo-800 text-indigo-800 flex justify-center items-center ">
        <h1>
          Spent time on read : <span>177</span> min
        </h1>
      </div>

      <div className="rounded-lg bg-opacity-35 bg-gray-900 p-[30px] h-[800px] overflow-y-auto">
        <h1 className="text-black font-extrabold text-2xl leading-10 tracking-normal text-left">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmarks;
