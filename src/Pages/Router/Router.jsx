import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomePage from "../HomePage/HomePage";
import { Route, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Story from "../Story/Story";
import Signup from "../../Components/Register/Signup";
import Signin from "../../Components/Register/Signin";
import Auth from "../Auth/Auth";
import EditAccountDetails from "../../Components/EditAccount/EditAccountDetails";

const Router = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/Signup" && (
        <div className="flex">
          <div className="w-[20%] border border-l-slate-500">
            <Sidebar></Sidebar>
          </div>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/:username" element={<Profile />}></Route>
              <Route path="/story" element={<Story />}></Route>
              <Route path="/comment/:postId" element={<HomePage />}></Route>
              <Route
                path="account/edit"
                element={<EditAccountDetails />}
              ></Route>
            </Routes>
          </div>
        </div>
      )}
      {(location.pathname === "/login" || location.pathname === "/Signup") && (
        <div>
          <Routes>
            <Route path="/Signup" element={<Auth />}></Route>
            <Route path="/login" element={<Auth />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Router;
