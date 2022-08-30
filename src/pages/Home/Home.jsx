import React, { useEffect, useState } from "react";
import "./_home.scss";
import Card from "../../components/Card/Card";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import axios from "axios";

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <>
      <CategoriesBar />
      <div className="mainContentWrapper">
        {videos?.map((video) => {
          return <Card video={video} />;
        })}
      </div>
    </>
  );
};
export default Home;
