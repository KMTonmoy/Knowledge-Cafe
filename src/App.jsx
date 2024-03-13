import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

const App = () => {
  const [bookmarks, setbookmarks] = useState([]);
  const handelToBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setbookmarks(newBookMarks);
  };
  return (
    <>
      <Header />

      <div className="flex justify-between gap-7 px-9 py-5">
        <div className="w-1/2">
          <Blogs handelToBookMark={handelToBookMark}></Blogs>
        </div>
        <div className="w-[411px] h-[1352px] ">
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
};

export default App;
