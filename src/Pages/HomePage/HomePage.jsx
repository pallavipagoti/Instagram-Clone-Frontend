import React, { useEffect, useState } from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/Post/PostCard";
import CreatePostModal from "../../Components/Post/CreatePostModal";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  findAllPostsByUserIdsAction,
  findPostsByUserIdAction,
} from "../../Redux/Post/Action";
import {
  getPopularUserAction,
  getUserProfileAction,
} from "../../Redux/User/Action";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userIds, setUserIds] = useState();
  const token = localStorage.getItem("token");
  const { user, post } = useSelector((store) => store);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction(token));
  }, [token]);

  useEffect(() => {
    const newIds = user.regUser?.following?.map((newuser) => newuser.id);
    if (newIds?.length > 0) {
      setUserIds([user.regUser?.id, ...newIds]);
    } else {
      // if (!user.regUser) {
      //   dispatch(getUserProfileAction(token));
      // }
      setUserIds([user.regUser?.id]);
    }
  }, [user.regUser]);
  useEffect(() => {
    const data = {
      jwt: token,
      userids: [userIds].join(","),
    };

    dispatch(findAllPostsByUserIdsAction(data));
    dispatch(getPopularUserAction(token));
  }, [userIds, post.createdPost, post.deleteMessage]);

  if (token) {
    return (
      <div>
        <div className="mt-10 flex w-[100%] justify-center">
          <div className="w-[44%] px-10">
            <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
              {[1, 1, 1].map((item) => (
                <StoryCircle></StoryCircle>
              ))}
            </div>
            <div className="space-y-10 w-full mt-10">
              {post.postsByUserIds.length > 0 &&
                post.postsByUserIds.map((item) => (
                  <PostCard key={item.id} post={item} />
                ))}
            </div>
          </div>
          <div className="w-[27%]">
            <HomeRight />
          </div>
        </div>
      </div>
    );
  } else {
    navigate("/login");
  }
};

export default HomePage;
