import React from "react";
import { Link } from "react-router-dom";
import "./_card.scss";
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
            src="https://cdn.dribbble.com/users/1787323/screenshots/10091971/media/d43c019bfeff34be8816481e843ea8c1.png?compress=1&resize=400x300"
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
