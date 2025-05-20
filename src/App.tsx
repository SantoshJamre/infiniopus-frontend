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
import ServiceDetail from "./components/pages/ServiceDetail";
import Portfolio from "./components/pages/Portfolio";
import ApplyPage from "./components/pages/Apply";
import RequestQuote from "./components/pages/RequestQuote";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/internship-courses" element={<InternshipCourses />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/request-quote" element={<RequestQuote />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
