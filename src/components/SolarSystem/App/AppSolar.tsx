import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Provider from "../Provider/Provider";
import Wrapper from "../Wrapper/Wrapper";
import Mercury from "../../../pages/SolarSystemPage/Mercury/Mercury";
import Venus from "../../../pages/SolarSystemPage/Venus/Venus";
import Earth from "../../../pages/SolarSystemPage/Earth/Earth";
import Mars from "../../../pages/SolarSystemPage/Mars/Mars";
import Jupiter from "../../../pages/SolarSystemPage/Jupiter/Jupiter";
import Saturn from "../../../pages/SolarSystemPage/Saturn/Saturn";
import Uranus from "../../../pages/SolarSystemPage/Uranus/Uranus";
import Neptune from "../../../pages/SolarSystemPage/Neptune/Neptune";
import KeyVisual from "../KeyVisual/KeyVisual";

const AppSolar = () => {
  const [activePlanet, setActivePlanet] = useState("/");

  return (
    <Provider>
      <Wrapper>
        <AnimatePresence>
          <Routes>
            <Route path="/mercury" element={<Mercury />}></Route>
            <Route path="/venus" element={<Venus />}></Route>
            <Route path="/earth" element={<Earth />}></Route>
            <Route path="/mars" element={<Mars />}></Route>
            <Route path="/jupiter" element={<Jupiter />}></Route>
            <Route path="/saturn" element={<Saturn />}></Route>
            <Route path="/uranus" element={<Uranus />}></Route>
            <Route path="/neptune" element={<Neptune />}></Route>
            <Route path="/" element={<KeyVisual activePlanet={activePlanet} />}></Route>
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </Provider>
  );
};

export default AppSolar;
