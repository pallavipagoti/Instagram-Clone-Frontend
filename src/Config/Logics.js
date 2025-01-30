import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export const isPostLikedByUser = (post, userId) => {
  for (let item of post.likedByUsers) {
    if (item.id === userId) return true;
  }
  return false;
};

export const isCommentLikedByUser = (comment, userId) => {
  for (let item of comment.likedByUsers) {
    if (item.id === userId) return true;
  }
  return false;
};

export const isSavedPost = (user, postId) => {
  for (let item of user.savedPosts) {
    if (item.id === postId) return true;
  }
  return false;
};

export const isFollowing = (regUser, user) => {
  if (regUser && user) {
    for (let item of user.followers) {
      if (item.id === regUser.id) return true;
    }
  }
  return false;
};

export const isRegUser = (userId1, userId2) => {
  if (userId1 && userId2) return userId1 === userId2;
};

export const timeDifference = (timeStamp) => {
  const serverTimeUTC = dayjs.utc(timeStamp); // Treat server timestamp as UTC
  const localTime = dayjs(); // Get local time

  const seconds = localTime.diff(serverTimeUTC, "seconds");

  // const date = new Date(timeStamp);
  // console.log(date);

  // const diff = date.getTime() - Date.now();

  // const seconds = Math.floor(diff / 1000);
  // console.log("seconds", seconds);

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  const months = Math.floor(weeks / 4);
  if (months > 0) {
    return months + " month" + (months === 1 ? "" : "s") + " ago";
  } else if (weeks > 0) {
    return weeks + " week" + (weeks === 1 ? "" : "s") + " ago";
  } else if (days > 0) {
    return days + " day" + (days === 1 ? "" : "s") + " ago";
  } else if (hours > 0) {
    return hours + " hour" + (hours === 1 ? "" : "s") + " ago";
  } else if (minutes > 0) {
    return minutes + " minute" + (minutes === 1 ? "" : "s") + " ago";
  } else if (seconds > 0) {
    return seconds + " second" + (seconds === 1 ? "" : "s") + " ago";
  }
};
