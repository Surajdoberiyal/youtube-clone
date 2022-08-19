import React from "react";
import { Image, Input } from "antd";
import Comment from "./Comment/Comment";
import "./_comments.scss";

const Comments = () => {
  return (
    <div className="commentsWrapper">
      <div className="commentWrapper">
        <Image
          preview={false}
          className="commentsChannelImage"
          src="https://cdn.dribbble.com/users/1787323/screenshots/10091971/media/d43c019bfeff34be8816481e843ea8c1.png?compress=1&resize=400x300"
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
