import React, { useEffect, useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import {
  followUserAction,
  getUserProfileAction,
  unFollowUserAction,
} from "../../Redux/User/Action";
import { useNavigate } from "react-router-dom";

const ProfileUserDetails = ({ user, isFollowed, isRegUser }) => {
  const { post } = useSelector((store) => store);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [follow, setFollow] = useState(isFollowed);

  useEffect(() => {
    dispatch(getUserProfileAction(token));
  }, [token, dispatch]);

  // useEffect(() => {
  //   if(user){const data = {
  //     jwt: token,
  //     userid: user.regUser?.id,
  //   };
  //   dispatch(findPostsByUserIdAction(data));}
  // }, [user]);

  const handleFollow = () => {
    if (follow) {
      dispatch(unFollowUserAction({ jwt: token, userid: user.id }));
    } else {
      dispatch(followUserAction({ jwt: token, userid: user.id }));
    }

    setFollow(!follow);
  };
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src={
              user?.image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
            alt=""
          />
        </div>

        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p className="capitalize">{user?.username}</p>
            {isRegUser ? (
              <button onClick={() => navigate("/account/edit")}>
                Edit Profile
              </button>
            ) : (
              <button onClick={handleFollow}>
                {follow ? "UnFollow" : "Follow"}
              </button>
            )}

            <TbCircleDashed />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">
                {!post.postsByUserId.message ? post.postsByUserId?.length : 0}
              </span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">
                {user?.followers.length}
              </span>
              <span>followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">
                {user?.following.length}
              </span>
              <span>following</span>
            </div>
          </div>
          <div className="text-left">
            <p className="font-semibold capitalize">{user?.name}</p>
            <p className="font-thin text-sm">{user?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
