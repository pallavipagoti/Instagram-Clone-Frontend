import React, { useEffect, useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import RegUserPostCard from "./RegUserPostCard";
import { useDispatch, useSelector } from "react-redux";

import { findPostsByUserIdAction } from "../../Redux/Post/Action";

const RegUserPostPart = ({ user }) => {
  const [activeTab, setActiveTab] = useState("Post");

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { post } = useSelector((store) => store);

  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable />,
      activeTab: "",
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />,
    },
    {
      tab: "Saved",
      icon: <BiBookmark />,
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />,
    },
  ];

  useEffect(() => {
    if (user != null) {
      dispatch(findPostsByUserIdAction({ jwt: token, userid: user?.id }));
    }
  }, [user, post.createdPost, dispatch, token]);

  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item, index) => (
          <div
            key={index}
            className={`${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"
            } flex items-center cursor-pointer py-2 text-sm `}
            onClick={() => setActiveTab(item.tab)}
          >
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex flex-wrap">
          {activeTab === "Post" && !post.postsByUserId.message
            ? post.postsByUserId?.map((item) => (
                <RegUserPostCard key={item.id} post={item}></RegUserPostCard>
              ))
            : user?.savedPosts.map((item) => (
                <RegUserPostCard key={item.id} post={item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default RegUserPostPart;
