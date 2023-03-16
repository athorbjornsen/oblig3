import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BoxTabs = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab")) ||"tab";

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);}, [activeTab]);
    
    
      const handleTabClick = (tab) => {
        setActiveTab(tab);
        };

      return (
        <div className="box-tabs">
          
          <Link
            to="/html"
            className={activeTab === "/html" ? "active" : ""}
            onClick={() => handleTabClick("/html")}
            
            
          >
            <p>HTML</p>
          </Link>
          <Link
            to="/css"
            className={activeTab === "/css" ? "active" : ""}
            onClick={() => handleTabClick("/css")}
          >
            <p>CSS</p>
          </Link>
          <Link
            to="/javascript"
            className={activeTab === "/javascript" ? "active" : ""}
            onClick={() => handleTabClick("/javascript")}
          >
            <p>Javascript</p>
          </Link>
          <Link
            to="/react"
            className={activeTab === "/react" ? "active" : ""}
            onClick={() => handleTabClick("/react")}
          >
            <p>React</p>
          </Link>
          <Link
            to="/sanity"
            className={activeTab === "/sanity" ? "active" : ""}
            onClick={() => handleTabClick("/sanity")}
          >
            <p>Sanity</p>
          </Link>
        </div>
      );
    };

export default BoxTabs;