import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import About from "./components/pages/About";
import Career from "./components/pages/Career";
import Services from "./components/pages/Services";
import InternshipCourses from "./components/pages/InternshipCourses";
import Contact from "./components/pages/Contact";
import Mission from "./components/pages/Mission";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/internship-courses" element={<InternshipCourses />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
