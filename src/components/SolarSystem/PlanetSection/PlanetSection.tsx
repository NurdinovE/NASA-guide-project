import { useState, useEffect } from "react";
import { Section, Container } from "./PlanetSectionStyles.ts";
// import useReplaceInfo from "./useReplaceInfo";
import Illustration from "./Illustration/Illustration";

const PlanetSection = () => {
  // const [handleClick, currentData, currentTab, isChanging] = useReplaceInfo(
  //   planetData
  // );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const checkWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return (
    <Section>
      <Container>
        <Illustration
          // planetData={planetData}
          // currentData={currentData}
          // isChanging={isChanging}
        />
      </Container>
    </Section>
  );
};

export default PlanetSection;
