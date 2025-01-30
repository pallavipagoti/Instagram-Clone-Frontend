import React from "react";
import { useNavigate } from "react-router-dom";

const SearchUserCard = ({ searchUsers }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${searchUsers?.username}`)}
      className="py-2 cursor-pointer"
    >
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={
            searchUsers?.image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          }
          alt=""
        />
        <div className="ml-3 capitalize">
          <p>{searchUsers?.name}</p>
          <p className="opacity-70">{searchUsers?.username}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchUserCard;
