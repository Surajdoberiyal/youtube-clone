import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
import { Image } from "antd";

const Card = ({ type }) => {
  const checkProps = (propType, propsClassName, cardClassName) => {
    return propType === "sm"
      ? propsClassName + " " + cardClassName
      : cardClassName;
  };

  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <div
        className={checkProps(type, "videoPlayerCardWrapper", "cardWrapper")}
      >
        <div className="cardImage">
        <Image
          preview={false}
          className={checkProps(type, "videoPlayerCardImg", "videoImg")}
          src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
        />
        </div>
        <div
          className={checkProps(type, "videoPlayerCardDetails", "cardDetails")}
        >
          <Image
            preview={false}
            className={checkProps(type, "videoPlayerChannelImg", "channelImg")}
            src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <div
            className={checkProps(
              type,
              "videoPlayerContentWrapper",
              "contentWrapper"
            )}
          >
            <div className="cardTitle">
              React Portfolio Website Tutorial From Scratch - Build & Deploy
            </div>
            <div className="cardChannelName">Code With Harry</div>
            <div className="cardInfo">660,908 views • 1 day ago</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
