import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelToBookMark}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../../../public/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handelToBookMark={handelToBookMark}
          data={blog}
        ></Blog>
      ))}
    </>
  );
};

export default Blogs;
