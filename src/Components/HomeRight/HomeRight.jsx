import React from "react";
import SuggestionCard from "./SuggestionCard";
import { useSelector } from "react-redux";

const HomeRight = () => {
  const { user } = useSelector((store) => store);
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src={
                  user.regUser?.image ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>{user.regUser?.name}</p>
              <p className="opacity-70">{user.regUser?.username}</p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold">switch</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {!user.popularUser.message &&
            user.popularUser?.map((item) => <SuggestionCard pop={item} />)}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
