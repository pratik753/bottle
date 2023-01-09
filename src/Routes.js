import React from "react";
import ProductDetailPageMockup from "pages/ProductDetailPageMockup";
import ScreenFive from "pages/ScreenFive";
import DesktopOne from "pages/DesktopOne";
import ScreenFour from "pages/ScreenFour";
import ScreenThree from "pages/ScreenThree";
import ScreenTwo from "pages/ScreenTwo";
import ScreenOne from "pages/ScreenOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/screentwo" element={<ScreenTwo />} />
        <Route path="/screenthree" element={<ScreenThree />} />
        <Route path="/screenfour" element={<ScreenFour />} />
        <Route path="/desktopone" element={<DesktopOne />} />
        <Route path="/screenfive" element={<ScreenFive />} />
        <Route
          path="/productdetailpagemockup"
          element={<ProductDetailPageMockup />}
        />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
