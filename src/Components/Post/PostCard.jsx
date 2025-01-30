import React, { useEffect, useState } from "react";
import { BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import CommentModal from "../Comment/CommentModal";
import "../Post/PostCard.css";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  savePostAction,
  unlikePostAction,
  likePostAction,
  unSavePostAction,
} from "../../Redux/Post/Action";
import { isPostLikedByUser, isSavedPost } from "../../Config/Logics";
import { useNavigate } from "react-router-dom";
import {
  findPostCommentAction,
  createCommentAction,
} from "../../Redux/Comment/Action";

const PostCard = ({ post }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [postLiked, setPostLiked] = useState(false);
  const [bookMarked, setBookMarked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [commentContent, setCommentContent] = useState();

  const token = localStorage.getItem("token");
  const data = { jwt: token, postid: post?.id };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleLike = () => {
    setPostLiked(true);
    dispatch(likePostAction(data));
  };
  const handleUnLike = () => {
    setPostLiked(false);
    dispatch(unlikePostAction(data));
  };

  const handleBookMark = () => {
    setBookMarked(true);
    dispatch(savePostAction(data));
  };
  const handleUnBookMark = () => {
    setBookMarked(false);
    dispatch(unSavePostAction(data));
  };

  const handleCommentModal = () => {
    // const data = {
    //   jwt: token,
    //   postId: post.id,
    // };
    // dispatch(findPostCommentAction(data));
    navigate(`/comment/${post.id}`);
    onOpen();
  };

  useEffect(() => {
    setPostLiked(isPostLikedByUser(post, user.regUser.id));
    setBookMarked(isSavedPost(user.regUser, post.id));
  }, [post.likedByUsers, user.regUser]);

  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={
                post?.user.userImage ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              }
              alt=""
            />
            <div className="pl-2">
              <p className="font-semibold text-sm">{post.user?.username}</p>
              <p className="font-thin text-sm">{post.location}</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={() => handleClick()} />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-full cursor-pointer"
            src={post?.image}
            alt=""
            onClick={handleCommentModal}
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {postLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={() => handleUnLike()}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={() => handleLike()}
              />
            )}

            <FaRegComment
              onClick={handleCommentModal}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div>
            {bookMarked ? (
              <BsBookmarkFill
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={() => handleUnBookMark()}
              />
            ) : (
              <BsBookmark
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={() => handleBookMark()}
              />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5 text-left">
          {post?.likedByUsers?.length > 0 && (
            <p>{post?.likedByUsers?.length} likes</p>
          )}
          {post?.comments?.length > 0 && (
            <p
              onClick={handleCommentModal}
              className="opacity-50 py-2 cursor-pointer"
            >
              view all {post?.comments?.length} comments
            </p>
          )}
        </div>
        <div className="border border-t w-full">
          <div className="flex w-full items-center px-5">
            <BsEmojiSmile />
            <input
              className="commentInput"
              type="text"
              value={commentContent}
              placeholder="Add a comment"
              onChange={(e) => setCommentContent(e.target.value)}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  const data = {
                    jwt: token,
                    postId: post.id,
                    data: { content: commentContent },
                  };
                  dispatch(createCommentAction(data));
                  setCommentContent("");
                }
              }}
            />
          </div>
        </div>
      </div>
      <CommentModal
        handleBookMark={handleBookMark}
        onClose={onClose}
        postLiked={postLiked}
        isOpen={isOpen}
        bookMarked={bookMarked}
        handleLike={handleLike}
        handleUnLike={handleUnLike}
        handleUnBookMark={handleUnBookMark}
      />
    </div>
  );
};

export default PostCard;
