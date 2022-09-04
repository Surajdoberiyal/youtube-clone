import React, { useEffect, useState } from "react";
import { Button, Image, Input } from "antd";
import Comment from "./Comment/Comment";
import "./_comments.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import Avatar from 'react-avatar';
import LoadingBar from "react-top-loading-bar";
import { toast } from "react-toastify";


const Comments = ({ videoId }) => {

  const { currentUser } = useSelector((state) => state.user);

  const [progress, setProgress] = useState(0);
  const [comments, setComments] = useState([]);
  const [inputComments, setInputComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
        setProgress(100)
      } catch (err) {
        console.warn(err)
      }
    };
    fetchComments();
  }, [videoId]);

  const handleComment = async () => {
    try {
      setProgress(10)
      const res = await axios.post(`/comments`, {
        desc: inputComments,
        videoId: videoId
      });
      setComments(res.data);
      toast.success("Commented!")
      setProgress(100)
    } catch (err) {
      console.warn(err)
    }
  }


  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="commentsWrapper">
        <div className="commentWrapper">
          {
            currentUser.img ? (
              <Image
                preview={false}
                className="commentsChannelImage"
                src={currentUser?.img}
              />
            ) : (
              <Avatar className="commentsChannelName" name={currentUser.name} />
            )
          }
          <Input allowClear={true} className="commentsInput" placeholder="Add a comment..." onChange={(e) => setInputComments(e.target.value)} />
          {
            inputComments.length > 0 ? <Button className="commentBtn" type="primary" onClick={handleComment}>Comment</Button> : ""
          }

        </div>
        {comments.length > 0 && comments.map(comment => <Comment key={comment._id} comment={comment} currentUser={currentUser}/>)}
      </div>
    </>

  );
};

export default Comments;
