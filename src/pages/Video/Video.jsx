import React from "react";
import { Image } from "antd";
import { MdOutlineThumbUp, MdOutlineThumbDown } from "react-icons/md";
import { RiShareForwardFill, RiPlayListAddFill } from "react-icons/ri";
import Card from "../../components/Card/Card";
import Comments from "../../components/Comments/Comments";
import "./video.scss";

const Video = () => {
  return (
    <>
      <div className="videoWrapper">
        <div className="mainContent">
          <div className="videoContainer">
            <iframe
              width="100%"
              height="520"
              src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="videoTitle">
            React Node.js Video Sharing App Full Tutorial (Redux, JWT, Cookies)
            | MERN Stack Youtube Clone
          </div>
          <div className="videoDetails">
            <span className="videoInfo">7,948,154 views • Jun 22, 2022</span>
            <div className="videoPlayerBtns">
              <span className="videoPlayerIconsBtn">
                <MdOutlineThumbUp />
                3.4K
              </span>
              <span className="videoPlayerIconsBtn">
                <MdOutlineThumbDown /> Dislike
              </span>
              <span className="videoPlayerIconsBtn">
                <RiShareForwardFill /> Share
              </span>
              <span className="videoPlayerIconsBtn">
                <RiPlayListAddFill /> Save
              </span>
            </div>
          </div>
          <hr className="videoPlayerLine" />
          <div className="videoPlayerChannelWrapper">
            <div className="channelInfo">
              <Image
                preview={false}
                className="channelLogo"
                src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
              />
              <div className="channelDetails">
                <span className="channelName">Suraj Kumar</span>
                <span className="channelCounter">4.5K subscribers</span>
                <span className="channelDescription">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus laborum delectus unde quaerat dolore culpa sit
                  aliquam at. Vitae facere ipsum totam ratione exercitationem.
                  Suscipit animi accusantium dolores ipsam ut.
                </span>
              </div>
            </div>
            <button className="channelSubscribeBtn">SUBSCRIBE</button>
          </div>
          <hr className="videoPlayerLine" />

          <Comments />
        </div>
        <div className="rightSideRecommandations">
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
        </div>
      </div>
    </>
  );
};
export default Video;
