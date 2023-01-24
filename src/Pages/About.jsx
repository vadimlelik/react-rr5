import React from "react";
import Breadcruumb from "../component/Breadcruumb";

const About = ({ route, location }) => {
    console.log(route, "route");
    return (
        <>
            <Breadcruumb locationPath={location.pathname} />
            <div>About</div>
        </>
    );
};

export default About;
