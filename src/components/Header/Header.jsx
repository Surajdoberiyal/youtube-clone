import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlinePoweroff } from "react-icons/ai";
import { MdNotificationsActive, MdOutlineAccountCircle } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import "./_header.scss";
import { Input, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import Avatar from 'react-avatar';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Header = ({ collapsed, setCollapsed }) => {
  const { Search } = Input;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <>
              <FaPowerOff style={{ color: 'white' }} />
              <Button onClick={() => {
                toast.success("Logout Successfully!");
                dispatch(logout());
                navigate("/signin");
              }}>Log out</Button>
            </>
          ),
        },

      ]}
    />
  );

  console.warn(currentUser)

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
          {currentUser ? (
            <>
              <MdNotificationsActive />
              <IoApps />
              <Dropdown overlay={menu} overlayClassName="userAvatarDropdown" >
                <a onClick={(e) => e.preventDefault()}>
                  {
                    currentUser?.img ? <Avatar className="avatarIcon" src={currentUser?.img} />
                      : <Avatar className="avatarIcon" name={currentUser?.name} />
                  }

                </a>
              </Dropdown>
            </>
          ) : (
            <div className="signInWrapper">
              <Link to="/signin" classname="navigationLink">
                <Button className="signInBtn">
                  <MdOutlineAccountCircle />
                  SIGN IN
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
};
export default Header;
