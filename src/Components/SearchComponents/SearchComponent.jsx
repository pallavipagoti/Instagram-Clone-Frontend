import React from "react";
import "./SearchComponent.css";
import SearchUserCard from "./SearchUserCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchUserAction } from "../../Redux/User/Action";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user } = useSelector((store) => store);

  const handleSearch = (e) => {
    dispatch(searchUserAction({ jwt: token, query: e.target.value }));
  };

  return (
    <div className="searchContainer">
      <div className="px-3 pb-5">
        <h1 className="text-xl pb-5">Search</h1>
        <input
          onChange={handleSearch}
          className="searchInput"
          type="text"
          placeholder="Search..."
        />
      </div>

      <hr />

      <div className="px-3 pt-5">
        {!user.searchUser?.message &&
          user.searchUser?.map((item) => (
            <SearchUserCard Key={item.id} searchUsers={item} />
          ))}
      </div>
    </div>
  );
};

export default SearchComponent;
