import React, { useEffect } from "react";
import ProfileUserDetails from "../../Components/ProfileComponents/ProfileUserDetails";
import RegUserPostPart from "../../Components/ProfileComponents/RegUserPostPart";
import RegUserPostCard from "../../Components/ProfileComponents/RegUserPostCard";

import {
  findUserByUserNameAction,
  getUserProfileAction,
} from "../../Redux/User/Action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isFollowing, isRegUser } from "../../Config/Logics";

const Profile = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { username } = useParams();
  const { user } = useSelector((store) => store);
  const isRegUsers = isRegUser(user.regUser?.id, user.findByUsername?.id);
  const isFollowed = isFollowing(user.regUser, user.findByUsername);

  useEffect(() => {
    const data = {
      jwt: token,
      username,
    };
    console.log("dispatch in profile page");

    dispatch(getUserProfileAction(token));
    dispatch(findUserByUserNameAction(data));
  }, [username, user.followUser, user.unfollowUser]);
  return (
    <div className="px-20 flex-col">
      {user.regUser != null && user.findByUsername != null && (
        <div>
          <div>
            <ProfileUserDetails
              user={isRegUsers ? user.regUser : user.findByUsername}
              isFollowed={isFollowed}
              isRegUser={isRegUsers}
            />
          </div>
          <div>
            <RegUserPostPart
              user={isRegUsers ? user.regUser : user.findByUsername}
            />
          </div>
        </div>
      )}
    </div>
  );
};
// return (
//   <div className="px-20">
//     <div className="">
//       <ProfileUserDetails />
//     </div>
//     <div>
//       <RegUserPostPart />
//     </div>
//   </div>
// );

// const token = localStorage.getItem("token");
// const dispatch = useDispatch();
// const { username } = useParams();
// const { user } = useSelector((store) => store);

// const isRegUsers = isRegUser(user.regUser?.id, user.findByUsername?.id);
// const isFollowed = isFollowing(user.regUser, user.findByUsername);
// console.log("user in profile", user);

// useEffect(() => {
//   const data = {
//     jwt: token,
//     username,
//   };

//   dispatch(getUserProfileAction(token));
//   dispatch(findUserByUserNameAction(data));
// }, [username, user.follower, user.following]);

// return (
//   <div className="px-20 flex-col">
//     {user.regUser != null && user.findByUsername != null && (
//       <div>
//         <div>
//           <ProfileUserDetails
//             user={isRegUsers ? user.regUser : user.findByUsername}
//             isFollowed={isFollowed}
//             isRegUser={isRegUsers}
//           />
//         </div>
//         <div>
//           <RegUserPostPart
//             user={isRegUsers ? user.regUser : user.findByUsername}
//           />
//         </div>
//       </div>
//     )}
//   </div>
// );

export default Profile;
