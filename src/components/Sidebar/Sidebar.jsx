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
import { Layout, Image, Button } from "antd";
import logo from "../../img/logo.png";
import "./_sidebar.scss";

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

  const handleOperationOfSidebarContent = (
    startSlicing,
    endSlicing,
    sidebarArray
  ) => {
    return sidebarArray?.map((elem) => {
      return elem.slice(startSlicing, endSlicing).map((e) => {
        return (
          <Link to={e?.link} classname="navigationLink">
            <div className="item">
              {e.icon}
              {e.label}
            </div>
          </Link>
        );
      });
    });
  };

  return (
    <Sider
      className={collapsed ? "Sidebar" : "hide_Sidebar Sidebar"}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Link to="/" classname="navigationLink">
        <div className="logoWrapper">
          <Image preview={false} src={logo} className="YoutubeLogo" />
          {collapsed ? "" : "YouTube"}
        </div>
      </Link>

      {collapsed ? (
        sidebarContentArray?.map((elem) => {
          return elem.map((e) => {
            return (
              <Link to={e?.link} classname="navigationLink">
                <div className="Collapseditem">{e.icon}</div>
              </Link>
            );
          });
        })
      ) : (
        <div className="sidebarWrapper">
          {handleOperationOfSidebarContent(0, 3, sidebarContentArray)}
          <div className="sidebarLine"></div>
          {handleOperationOfSidebarContent(3, 5, sidebarContentArray)}
          <div className="textGroup">
            <span className="signInText">
              Sign in to like videos, comment, and subscribe.
            </span>
            <Link to="/signin" classname="navigationLink">
              <Button className="signInBtn">
                <MdOutlineAccountCircle />
                SIGN IN
              </Button>
            </Link>
          </div>
          <div className="sidebarLine"></div>
          <div className="paraText">BEST OF SURAJ</div>
          {handleOperationOfSidebarContent(5, 11, sidebarContentArray)}
          {handleOperationOfSidebarContent(11, 14, sidebarContentArray)}
        </div>
      )}
    </Sider>
  );
};
export default Sidebar;
