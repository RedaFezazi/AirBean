import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Loading from "./Pages/Landing/Loading";
import Menu from "./Pages/Menu/Menu";
import About from "./Pages/about/About";
import Status from "./Pages/Status/Status";
import Profile from "./Pages/profile/Profile";
import FetchOrder from "./Pages/FetchOrder/FetchOrder";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/status" element={<Status />} />
        <Route path="/FetchOrder" element={<FetchOrder />} />

        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </Router>
  );
};

export default App;
