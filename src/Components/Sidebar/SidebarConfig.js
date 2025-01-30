import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiFillCompass,
  AiOutlineMessage,
  AiFillMessage,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { IoLogOut, IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { nanoid } from "nanoid";

export const menu = [
  {
    id: nanoid(),
    title: "Home",
    icon: <AiOutlineHome className="text-2xl mr-5" />,
    activeIcon: <AiFillHome className="text-2xl mr-5" />,
  },
  {
    id: nanoid(),
    title: "Search",
    icon: <AiOutlineSearch className="text-2xl mr-5" />,
    activeIcon: <AiOutlineSearch className="text-2xl mr-5" />,
  },
  {
    id: nanoid(),
    title: "Explore",
    icon: <AiOutlineCompass className="text-2xl mr-5" />,
    activeIcon: <AiFillCompass className="text-2xl mr-5" />,
  },
  {
    id: nanoid(),
    title: "Reels",
    icon: <RiVideoLine className="text-2xl mr-5" />,
    activeIcon: <RiVideoFill className="text-2xl mr-5" />,
  },
  {
    id: nanoid(),
    title: "Message",
    icon: <AiOutlineMessage className="text-2xl mr-5" />,
    activeIcon: <AiFillMessage className="text-2xl mr-5" />,
  },
  {
    id: nanoid(),
    title: "Notification",
    icon: <AiOutlineHeart className="text-2xl mr-5" />,
    activeIcon: <AiFillHeart className="text-2xl mr-5" />,
  },
  {
    id: nanoid(),
    title: "Create",
    icon: <AiOutlinePlusCircle className="text-2xl mr-5" />,
    activeIcon: <AiFillPlusCircle className="text-2xl mr-5" />,
  },
  {
    id: nanoid(),
    title: "Profile",
    icon: <CgProfile className="text-2xl mr-5" />,
    activeIcon: <CgProfile className="text-2xl mr-5" />,
  },
  {
    id: nanoid(),
    title: "Logout",
    icon: <IoLogOutOutline className="text-2xl mr-5" />,
    activeIcon: <IoLogOut className="text-2xl mr-5" />,
  },
];
