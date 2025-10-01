import React, { useState } from "react";
import "./Home.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Home = () => {
  const [sidebar, setSidebar] = useState(true); // default sidebar visible

  return (
    <div className="home">
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
