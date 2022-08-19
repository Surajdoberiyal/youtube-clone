import React from "react";
import { Image } from "antd";
import { MdOutlineThumbUp, MdOutlineThumbDown } from "react-icons/md";
import { RiShareForwardFill, RiPlayListAddFill } from "react-icons/ri";
import Card from "../../components/Card/Card";
import Comments from "../../components/Comments/Comments";
import "./_video.scss";

const Video = () => {
  return (
    <>
      <div className="videoWrapper">
        <div className="mainContent">
          <div className="videoContainer">
            <iframe
              className="videoIFrame"
              src="https://www.youtube.com/embed/M-P4QBt-FWw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="videoTitle">
            Alan Walker - Darkside (feat. Au/Ra and Tomine Harket)
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
                src="https://cdn.dribbble.com/users/1787323/screenshots/10091971/media/d43c019bfeff34be8816481e843ea8c1.png?compress=1&resize=400x300"
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
        <div className="recommandedVideos">Recommanded videos for you</div>
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
