import React from "react";
import {
  MdOutlineExplore,
  MdHome,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineAccountCircle,
  MdOutlineLibraryMusic,
  MdOutlineSportsBasketball,
  MdSportsEsports,
  MdOutlineMovie,
  MdOutlineArticle,
  MdOutlineLiveTv,
  MdOutlineSettings,
  MdOutlineFlag,
  MdOutlineHelp,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Layout, Image } from "antd";
import logo from "../../img/logo.png";
import "./sidebar.scss";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const sidebarContentArray = [
    [
      {
        key: "1",
        icon: <MdHome />,
        label: "Home",
        link: "/",
      },
      {
        key: "2",
        icon: <MdOutlineExplore />,
        label: "Explore",
        link: "/explorer",
      },
      {
        key: "3",
        icon: <MdOutlineSubscriptions />,
        label: "Subscriptions",
        link: "/subscriptions",
      },
      {
        key: "4",
        icon: <MdOutlineVideoLibrary />,
        label: "Library",
        link: "/library",
      },
      {
        key: "5",
        icon: <MdOutlineHistory />,
        label: "History",
        link: "/history",
      },
      {
        key: "6",
        icon: <MdOutlineLibraryMusic />,
        label: "Music",
        link: "/music",
      },
      {
        key: "7",
        icon: <MdOutlineSportsBasketball />,
        label: "Sports",
        link: "/sports",
      },
      {
        key: "8",
        icon: <MdSportsEsports />,
        label: "Gaming",
        link: "/gaming",
      },
      {
        key: "9",
        icon: <MdOutlineMovie />,
        label: "Movies",
        link: "/movies",
      },
      {
        key: "10",
        icon: <MdOutlineArticle />,
        label: "News",
        link: "/news",
      },
      {
        key: "11",
        icon: <MdOutlineLiveTv />,
        label: "Live",
        link: "/live",
      },
      {
        key: "12",
        icon: <MdOutlineSettings />,
        label: "Setting ",
        link: "/setting",
      },
      {
        key: "13",
        icon: <MdOutlineFlag />,
        label: "Report",
        link: "/report",
      },
      {
        key: "14",
        icon: <MdOutlineHelp />,
        label: "Help",
        link: "/help",
      },
    ],
  ];

  return (
    <Sider className="Sidebar" trigger={null} collapsible collapsed={collapsed}>
      <Link to="/" classname="navigationLink">
        <div className="logoWrapper">
          <Image preview={false} src={logo} className="logo" />
          {collapsed ? "" : "YouTube"}
        </div>
      </Link>

      {collapsed ? (
        <>
          {sidebarContentArray?.map((elem) => {
            return (
              <>
                {elem.map((e) => {
                  return (
                    <Link to={e?.link} classname="navigationLink">
                      <div className="Collapseditem">{e.icon}</div>
                    </Link>
                  );
                })}
              </>
            );
          })}
        </>
      ) : (
        <div className="sidebarWrapper">
          {sidebarContentArray.map((e) => {
            return (
              <>
                {e.slice(0, 3).map((elem) => {
                  return (
                    <Link to={elem?.link} classname="navigationLink">
                      <div className="item">
                        {elem.icon}
                        {elem.label}
                      </div>
                    </Link>
                  );
                })}
                <div className="sidebarLine"></div>
                {e.slice(3, 5).map((elem) => {
                  return (
                    <Link to={elem?.link} classname="navigationLink">
                    <div className="item">
                      {elem.icon}
                      {elem.label}
                    </div>
                  </Link>
                  );
                })}
                <div className="textGroup">
                  <span>Sign in to like videos, comment, and subscribe.</span>
                  <button className="signInBtn">
                    <MdOutlineAccountCircle />
                    SIGN IN
                  </button>
                </div>
                <div className="sidebarLine"></div>
                <div className="paraText">BEST OF SURAJ</div>
                {e.slice(5, 11).map((elem) => {
                  return (
                    <Link to={elem?.link} classname="navigationLink">
                    <div className="item">
                      {elem.icon}
                      {elem.label}
                    </div>
                  </Link>
                  );
                })}
                <div className="sidebarLine"></div>
                {e.slice(11, 14).map((elem) => {
                  return (
                    <Link to={elem?.link} classname="navigationLink">
                      <div className="item">
                        {elem.icon}
                        {elem.label}
                      </div>
                    </Link>
                  );
                })}
              </>
            );
          })}
        </div>
      )}
    </Sider>
  );
};
export default Sidebar;
