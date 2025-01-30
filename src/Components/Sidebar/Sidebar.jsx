import React, { useState } from "react";
import { Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModal from "../Post/CreatePostModal";
import SearchComponent from "../SearchComponents/SearchComponent";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/Auth/Action";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { user } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate(`/${user.regUser?.username}`);
    } else if (title === "Home") {
      navigate("/");
    } else if (title === "Create") {
      onOpen();
    }
    if (title === "Search") {
      setIsSearchVisible(true);
    } else {
      setIsSearchVisible(false);
    }
    if (title === "Logout") {
      console.log("logout");

      dispatch(logoutAction());
      navigate("/login");
    }
  };
  return (
    <div className="sticky top-0 h-[100vh] flex">
      <div
        className={`flex flex-col justify-between h-full ${
          activeTab === "Search" ? "px-2" : "px-10"
        }`}
      >
        <div>
          {activeTab !== "Search" && (
            <div className="pt-10">
              <img
                className="w-40"
                src="https://imgur.com/zqpwkLQ.png"
                alt=""
              />
            </div>
          )}
          <div className="mt-10">
            {menu.map((item) => (
              <div
                key={item.id}
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                {activeTab !== "Search" && (
                  <p
                    className={`${
                      activeTab === item.title ? "font-bold" : "font-semibold"
                    }`}
                  >
                    {item.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          {activeTab !== "Search" && <p className="ml-5">More</p>}
        </div>
      </div>

      <CreatePostModal onClose={onClose} isOpen={isOpen} />
      {isSearchVisible && <SearchComponent />}
    </div>
  );
};

export default Sidebar;
