import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <>
      <div className="rounded-md bg-white p-[20px] w-[351px] h-[98px] font-bold text-[20px] my-3">
        {title}
      </div>
    </>
  );
};

Bookmark.prototype = {
  bookmark: PropTypes.object,
};

export default Bookmark;
