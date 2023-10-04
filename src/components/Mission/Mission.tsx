import * as React from "react";

import astronaut from "../../assets/austronaut.png"
import astroIcon from "../../assets/astronautIcon.png"
import "./Mission.css"

const Mission = () => {

    return (
        <>
            <div className="wrapperTitle">
                Our mission
            </div>
            <div className="astronaut">
                <div className="astronautIcon">
                    <img src={astroIcon} alt="lets play"/>
                </div>
                <img src={astronaut} alt="Astronaut"/>
            </div>


        </>
    );
};

export default Mission;