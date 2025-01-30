import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCircle = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/story");
  };
  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer flex flex-col items-center"
    >
      <img
        className="w-16 h-16 rounded-full"
        src="https://media.istockphoto.com/id/1864296440/photo/white-butterfly-flies-free-in-the-middle-of-a-flowery-meadow.jpg?s=1024x1024&w=is&k=20&c=uQhotbbhO7wBoPEzoD4wpK5L4mFrLnyRGdw9pn_Oqao="
        alt=""
      />
      <p>username</p>
    </div>
  );
};

export default StoryCircle;
