import { Routes, Route, Navigate } from "react-router-dom";
import Dinner from "../pages/Dinner";
import Homepage from "../pages/Homepage";
import Classes from "../pages/Classes";
import Pasta from "../pages/Pasta";
import Contact from "../pages/Contact";
import Onlyfans from "../pages/Onlyfans";

//routes list.  Protected routes ensure user is logged in to see specific routes.
function RoutesList() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pasta" element={<Pasta />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/onlyfans" element={<Onlyfans />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
