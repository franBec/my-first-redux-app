import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Detail from "../views/Detail";
import Results from "../views/Results";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results/:title" element={<Results />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
