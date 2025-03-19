import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./utils";
import { PageApropos, PageHome, PageImpact, PagePie, PagePublication, PageRealisation, PageSuccess } from "./pages";
import "flowbite";
import { useEffect } from "react";
import PageGie from "./pages/PageGie";

function App() {
  useEffect(() => {
    if (window.Flowbite) {
      window.Flowbite.init();
    }
  }, []);
  return (
    <Router>
      <Routes>
        {/* Route englobant tout avec Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome/>} />
          <Route path="gie/about" element={<PageApropos />} />
          <Route path="gie/realisation" element={<PageRealisation/>} />
          <Route path="gie" element={<PageGie/>} />
          <Route path="pi/impact" element={<PageImpact />} />
          <Route path="pi/publication" element={<PagePublication />} />
          <Route path="pi" element={<PagePie />} />
          <Route path="pi/success" element={<PageSuccess/>} />
          <Route path="etapes/impact" element={<PageImpact />} />
          <Route path="etapes/publication" element={<PagePublication />} />
          <Route path="etapes/success" element={<PageSuccess />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
