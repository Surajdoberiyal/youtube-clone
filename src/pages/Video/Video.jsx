import React, { useEffect, useState } from "react";
import { Image } from "antd";
import { MdOutlineThumbUp, MdOutlineThumbDown, MdThumbUp, MdThumbDown, MdNotificationsActive } from "react-icons/md";
import { RiShareForwardFill, RiPlayListAddFill } from "react-icons/ri";
import Card from "../../components/Card/Card";
import Comments from "../../components/Comments/Comments";
import "./_video.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../../redux/videoSlice";
import { subscription, loginSuccess } from "../../redux/userSlice";
import { format } from "timeago.js";
import Avatar from 'react-avatar';


const Video = () => {

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation()?.pathname.split("/")[2]

  const [channel, setChannel] = useState({});
  const [trendVideos, setTrendVideos] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`)
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`)

        setChannel(channelRes.data)
        dispatch(fetchSuccess(videoRes.data))

      } catch (err) {
        console.warn(err)
      }
    }
    fetchData();
  }, [path, dispatch])




  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDisLike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSubscribe = async () => {
    currentUser.subscribedUsers?.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };


  useEffect(() => {
    const fetchTrendsVideos = async () => {
      const res = await axios.get(`/videos/trend`);
      setTrendVideos(res.data);
    };
    fetchTrendsVideos();
  }, []);


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
            {currentVideo?.title}
          </div>
          <div className="videoDetails">
            <span className="videoInfo">  {currentVideo?.views}  •  {format(currentVideo?.createdAt)}</span>
            <div className="videoPlayerBtns">
              <span className="videoPlayerIconsBtn" onClick={handleLike}>
                {currentVideo?.likes?.includes(currentUser?._id) ? <MdThumbUp /> : <MdOutlineThumbUp />}
                {currentVideo?.likes?.length}
              </span>
              <span className="videoPlayerIconsBtn" onClick={handleDisLike}>
                {currentVideo?.dislikes?.includes(currentUser?._id) ? <MdThumbDown /> : <MdOutlineThumbDown />}
                {currentVideo?.dislikes?.length}
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
              {
                channel.img ? (
                  <Image
                    preview={false}
                    className="channelLogo"
                    src={channel?.img}
                  />
                ) : (
                  <Avatar className="channelLogoName" name={channel.name} />
                )
              }
              <div className="channelDetails">
                <span className="channelName">{channel?.name}</span>
                <span className="channelCounter">{channel?.subscribers} subscribers</span>
                <span className="channelDescription">
                  {currentVideo.desc}
                </span>
              </div>
            </div>
            <button className="channelSubscribeBtn" onClick={handleSubscribe}>
              {currentUser.subscribedUsers?.includes(channel._id)
                ? (
                  <>
                    <MdNotificationsActive />
                    SUBSCRIBED
                  </>
                )
                : "SUBSCRIBE"}
            </button>
          </div>
          <hr className="videoPlayerLine" />

          <Comments videoId={currentVideo._id} />
        </div>
        <div className="recommandedVideos">Recommanded videos for you</div>
        <div className="rightSideRecommandations">
          {
            trendVideos.length > 0 && trendVideos?.map((video) => {
              return <Card video={video} type="sm" />;
            })
          }
        </div>
      </div>
    </>
  );
};
export default Video;
