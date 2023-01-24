import React from "react";
import Breadcruumb from "../component/Breadcruumb";

const About = ({ location }) => {
    return (
        <>
            <Breadcruumb locationPath={location} />
            <div>About</div>
        </>
    );
};

export default About;
