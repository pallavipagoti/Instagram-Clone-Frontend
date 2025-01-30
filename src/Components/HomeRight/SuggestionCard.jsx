import React from "react";
import { followUserAction } from "../../Redux/User/Action";
import { useSelector } from "react-redux";

const SuggestionCard = ({ pop }) => {
  const token = localStorage.getItem("token");
  const { user } = useSelector((store) => store);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-9 h-9 rounded-full"
          src={
            pop.image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          }
          alt=""
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">{pop.username}</p>
          <p className="text-sm font-semibold opacity-70 text-left">Popular</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>
  );
};

export default SuggestionCard;
