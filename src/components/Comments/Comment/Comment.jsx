import React from "react";
import { Image } from "antd";
import "../_comments.scss";

const Comment = () => {
  return (
    <div className="commentWrapper">
      <Image
        preview={false}
        className="commentChannelImage"
        src="https://cdn.dribbble.com/users/1787323/screenshots/10091971/media/d43c019bfeff34be8816481e843ea8c1.png?compress=1&resize=400x300"
      />
      <div className="commentsDetails">
        <span className="commentUserName">
          Suraj Kumar
          <span className="commentTiming">1 day ago</span>
        </span>
        <span className="commentsPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </span>
      </div>
    </div>
  );
};

export default Comment;
