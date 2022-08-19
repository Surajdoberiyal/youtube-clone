import React from "react";
import { Image, Input } from "antd";
import Comment from "./Comment/Comment";
import "./comments.scss";

const Comments = () => {
  return (
    <div className="commentsWrapper">
      <div className="commentWrapper">
        <Image
          preview={false}
          className="commentsChannelImage"
          src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
        />
        <Input className="commentsInput" placeholder="Add a comment..." />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
