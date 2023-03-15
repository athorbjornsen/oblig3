import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoxTabs from "./Components/BoxTabs";
import Resources from "./Components/Resources";

import './App.css';

function App() {
  return (
    <div>
      <Router>
    <header>
    Header
    </header>  
    <main id="prov">   
                     
        <div id="divbox"></div>
          <BoxTabs />
          
          <div id="dib">
          <Routes>
            <Route path="/html" element={<Resources category="html" />} />
            <Route path="/css" element={<Resources category="css" />} />
            <Route path="/javascript" element={<Resources category="javascript" />} />
            <Route path="/react" element={<Resources category="react" />} />
            <Route path="/sanity" element={<Resources category="headless-cms" />} />    
        </Routes>
       
        </div>
        
         
       
          
        
        
        </main>
        </Router>
        </div>
    );
    }
    
export default App;



/*import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BoxTabs from './Components/BoxTabs';

const App = () => (
  <Router>
    <div className="App">
      <Route path="/" component={BoxTabs} />
    </div>
  </Router>
);

export default App;

*/