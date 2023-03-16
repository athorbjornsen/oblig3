import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoxTabs from "./Components/BoxTabs";
import Resources from "./Components/Resources";

import './App.css';
//import './css/main.css';

function App() {
  return (

    <div>
      <Router>

    <header>
      <h1>Header</h1>
    </header>

    <main id="Layout">                 
      <BoxTabs />
      
      <div id="Paths">
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


