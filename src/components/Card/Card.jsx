import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./_card.scss";
import { Image } from "antd";
import { format } from "timeago.js";
import axios from "axios";

const checkProps = (propType, propsClassName, cardClassName) => {
  return propType === "sm"
    ? propsClassName + " " + cardClassName
    : cardClassName;
};
const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannels = async () => {
      const res = await axios.get(`/users/find/${video?.userId}`);
      setChannel(res.data);
    };
    fetchChannels();
  }, [video.userId]);

  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <div
        className={checkProps(type, "videoPlayerCardWrapper", "cardWrapper")}
      >
        <div className="cardImage">
          <Image
            preview={false}
            className={checkProps(type, "videoPlayerCardImg", "videoImg")}
            src={video?.imgUrl}
          />
        </div>
        <div
          className={checkProps(type, "videoPlayerCardDetails", "cardDetails")}
        >
          <Image
            preview={false}
            className={checkProps(type, "videoPlayerChannelImg", "channelImg")}
            src={channel?.imgUrl}
          />
          <div
            className={checkProps(
              type,
              "videoPlayerContentWrapper",
              "contentWrapper"
            )}
          >
            <div className="cardTitle">{video?.title}</div>
            <div className="cardChannelName">{channel?.name}</div>
            <div className="cardInfo">
              {video?.views} views • {format(video?.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
