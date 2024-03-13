import React from "react";
import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="p-4">
      <nav className="flex justify-between">
        <h1 className="font-bold text-[35px]">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </nav>
    </div>
  );
};

export default Header;
