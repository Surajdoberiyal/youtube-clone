import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import "./_header.scss";
import { Input, Avatar } from "antd";

const Header = ({ collapsed, setCollapsed }) => {
  const { Search } = Input;

  return (
    <>
      <div className="site-layout-background header">
        <div
          className="collapsedTrigger"
          onClick={() => setCollapsed(!collapsed)}
        >
          <AiOutlineMenuUnfold />
        </div>

        <div className="searchBar">
          <Search
            className="inputSearch"
            allowClear
            placeholder="Search"
            // onSearch={}
            enterButton={<IoIosSearch />}
          />
        </div>
        <div className="headerRightSideIcons">
          <MdNotificationsActive />
          <IoApps />
          <Avatar>S</Avatar>
        </div>
      </div>
    </>
  );
};
export default Header;
