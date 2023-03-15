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
            HTML
          </Link>
          <Link
            to="/css"
            className={activeTab === "/css" ? "active" : ""}
            onClick={() => handleTabClick("/css")}
          >
            CSS
          </Link>
          <Link
            to="/javascript"
            className={activeTab === "/javascript" ? "active" : ""}
            onClick={() => handleTabClick("/javascript")}
          >
            JavaScript
          </Link>
          <Link
            to="/react"
            className={activeTab === "/react" ? "active" : ""}
            onClick={() => handleTabClick("/react")}
          >
            React
          </Link>
          <Link
            to="/sanity"
            className={activeTab === "/sanity" ? "active" : ""}
            onClick={() => handleTabClick("/sanity")}
          >
            Sanity
          </Link>
        </div>
      );
    };

export default BoxTabs;























/*import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import TabContent from './TabContent';
import resources from './Resources/ressurser.js';

const BoxTabs = () => {
  const [activeTab, setActiveTab] = useState('a');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="box-tabs">
      <div className="tab-links">
        <Link
          to="/a"
          className={`tab-link ${activeTab === 'a' ? 'active' : ''}`}
          onClick={() => handleTabClick('a')}
        >
          Tab A
        </Link>
        <Link
          to="/b"
          className={`tab-link ${activeTab === 'b' ? 'active' : ''}`}
          onClick={() => handleTabClick('b')}
        >
          Tab B
        </Link>
        <Link
          to="/c"
          className={`tab-link ${activeTab === 'c' ? 'active' : ''}`}
          onClick={() => handleTabClick('c')}
        >
          Tab C
        </Link>
        <Link
          to="/d"
          className={`tab-link ${activeTab === 'd' ? 'active' : ''}`}
          onClick={() => handleTabClick('d')}
        >
          Tab D
        </Link>
        <Link
          to="/e"
          className={`tab-link ${activeTab === 'e' ? 'active' : ''}`}
          onClick={() => handleTabClick('e')}
        >
          Tab E
        </Link>
      </div>
      <div className="tab-content">
        <Route path="/:tab" render={({ match }) => (
          <TabContent text={resources[match.params.tab]} />
        )} />
      </div>
    </div>
  );
};

export default BoxTabs;

*/