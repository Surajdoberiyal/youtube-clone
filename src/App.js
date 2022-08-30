import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./_global.scss";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="mainWrapper">
      <BrowserRouter>
        <Sidebar collapsed={collapsed} />
        <Layout className="site-layout">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout className="main-site-content">
            <Routes>
              <Route path="/">
                <Route index element={<Home type="random" />} />
                <Route path="trends" element={<Home type="trend" />} />
                <Route path="subscriptions" element={<Home type="sub" />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
