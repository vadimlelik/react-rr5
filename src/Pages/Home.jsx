import React from "react";
import Breadcruumb from "../component/Breadcruumb";

const Home = ({ location }) => {
    return (
        <>
            <Breadcruumb locationPath={location.pathname} />
            <h1> Home</h1>
        </>
    );
};

export default Home;
