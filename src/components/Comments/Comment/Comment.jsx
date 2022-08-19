import React from "react";
import { Image } from "antd";
import "../_comments.scss";

const Comment = () => {
  return (
    <div className="commentWrapper">
      <Image
        preview={false}
        className="commentChannelImage"
        src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
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
