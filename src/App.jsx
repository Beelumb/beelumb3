import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SemPage from "./pages/SemPage";
import WebDesign from "./pages/WebDesign";
import SeoPage from "./pages/SeoPage";
import Layout from './Layout';

function App() {


  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/Sem" element={<SemPage />} />
          <Route path="/Seo" element={<SeoPage />} />
          <Route path="/WebDesign" element={<WebDesign />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
