import React, { useEffect, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import {
  BsThreeDots,
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentCard from "./CommentCard";
import "./CommentModal.css";
import { useDispatch, useSelector } from "react-redux";
import { findPostByPostIdAction } from "../../Redux/Post/Action";
import { createCommentAction } from "../../Redux/Comment/Action";
import { useNavigate, useParams } from "react-router-dom";
import { timeDifference } from "../../Config/Logics";

const CommentModal = ({
  onClose,
  isOpen,
  postLiked,
  handleBookMark,
  handleLike,
  bookMarked,
  handleUnLike,
  handleUnBookMark,
}) => {
  const [commentContent, setCommentContent] = useState();
  const token = localStorage.getItem("token");
  const { postId } = useParams("postId");
  const { comment, post } = useSelector((store) => store);
  // console.log("comment", comment);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(post.postByPostId);

  useEffect(() => {
    // console.log(postId);

    const data = {
      jwt: token,
      postid: postId,
    };

    if (postId) {
      dispatch(findPostByPostIdAction(data));
    }
  }, [comment.createdComment, postId, comment.likedComment]);

  const handleClose = () => {
    navigate("/");
    onClose();
  };
  return (
    <div>
      <Modal size={"4xl"} onClose={handleClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src={post.postByPostId?.image}
                  alt=""
                />
              </div>
              <div className="w-[55%] pl-10 relative">
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src={
                          post.postByPostId?.user.userImage ||
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>{post.postByPostId?.user.username}</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div className="comment">
                  {post.postByPostId?.comments?.map((item) => (
                    <CommentCard comment={item} />
                  ))}
                  {/* {comment.postComment.map(() => (
                    <CommentCard />
                  ))} */}
                </div>
                <div className="absolute bottom-0 w-[90%] ">
                  <div className="flex justify-between items-center w-full py-5">
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

                      <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
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

                  <div className="w-full">
                    {post.postByPostId?.likedByUsers?.length > 0 && (
                      <p>{post.postByPostId?.likedByUsers?.length} likes</p>
                    )}
                    <p className="opacity-50 text-sm">
                      {timeDifference(post.postByPostId?.createdAt)}
                    </p>
                  </div>

                  {/* <div className="border border-t w-full">
                   
                  </div> */}

                  <div className="flex w-full items-center">
                    <BsEmojiSmile />
                    <input
                      className="commentInputs"
                      type="text"
                      placeholder="Add a comment"
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const data = {
                            jwt: token,
                            postId: postId,
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
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
