import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Page404 } from "../pages/Page404";
import { DebugPage } from "../pages/DebugPage";
import { Layout } from "../components/structure/Layout/Layout";
import { Contacts } from "../pages/Contacts";
import { Gallery } from "../pages/Gallery";
import { About } from "../pages/About";
import { Services } from "../pages/Services";

export const RouterPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<LandingPage />} />}></Route>
        <Route path="/sobre" element={<Layout children={<About />} />}></Route>
        <Route
          path="/portefolio"
          element={<Layout children={<Gallery />} />}
        ></Route>
        <Route
          path="/servicos"
          element={<Layout children={<Services />} />}
        ></Route>
        <Route
          path="/contactos"
          element={<Layout children={<Contacts />} />}
        ></Route>
        <Route path="/debug" element={<DebugPage />}></Route>
        <Route path="*" element={<Layout children={<Page404 />} />}></Route>
      </Routes>
    </Router>
  );
};
