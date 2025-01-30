import React from "react";
import "./Auth.css";
import Signin from "../../Components/Register/Signin";
import { useLocation } from "react-router-dom";
import Signup from "../../Components/Register/Signup";

const Auth = () => {
  const location = useLocation();
  return (
    <div className="">
      <div className="flex items-center justify-center h-[100vh] space-x-5">
        <div className="relative hidden lg:block">
          <div className="h-[30rem] w-[23rem] border-red-600">
            <img
              className="h-full w-full"
              src="https://github.com/jatin4rya/V8-Instagram-Login-Clone/blob/main/IG.jpeg?raw=true"
              alt=""
            />
            <div className="mobileWallpaper h-[28rem] w-[15.6rem] absolute top-5 right-3 "></div>
          </div>
        </div>
        <div className=" w-[40vw] lg:w-[27vw]">
          {location.pathname === "/login" ? <Signin /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

// src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"

export default Auth;
