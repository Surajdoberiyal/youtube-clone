import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "../_comments.scss";
import axios from "axios";
import Avatar from 'react-avatar';
import { format } from "timeago.js";
import { RiDeleteBinLine } from 'react-icons/ri';
import LoadingBar from "react-top-loading-bar";
import { toast } from "react-toastify";

const Comment = ({ comment, currentUser }) => {

  const [channel, setChannel] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data)
    };
    fetchComment();
  }, [comment.userId]);

  const handleDeleteComment = async () => {
    const res = await axios.delete(`/comments/${currentUser._id}`);
    setProgress(100)
    toast.success("Comment Deleted!")
  }

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="commentContainer">
        <div className="commentWrapper">
          {
            channel.img ? (
              <Image
                preview={false}
                className="commentsChannelImage"
                src={channel?.img}
              />
            ) : (
              <Avatar className="commentsChannelName" name={channel.name} />
            )
          }
          <div className="commentsDetails">
            <span className="commentUserName">
              {channel?.name}
              <span className="commentTiming">{format(channel?.createdAt)}</span>
            </span>
            <span className="commentsPara">
              {comment.desc}
            </span>
          </div>

        </div>
        {
          comment && comment.userId === currentUser?._id ? (
            <div className="deleteComment">
              <RiDeleteBinLine onClick={handleDeleteComment} />
            </div>
          ) : ""
        }
      </div>
    </>
  );
};

export default Comment;
