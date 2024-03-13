import React from "react";

const Blog = ({data, handelToBookMark}) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = data;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={cover} alt={title} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={author_img}
              alt={author}
            />
            <div>
              <h3>{author}</h3>
              <h3>{posted_date}</h3>
            </div>
          </div>
          <button onClick={()=>handelToBookMark(data)}>
            {reading_time} min read 📖
          </button>
        </div>
        <h2 className="font-bold text-[30px]">{title}</h2>
        <div className="grid">
          <p>#{hashtags[0]}</p>
          <p>#{hashtags[1]}</p>
        </div>
        <a href="">Mark as read</a>
      </div>
    </div>
  );
};

export default Blog;
