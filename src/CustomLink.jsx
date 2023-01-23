import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CustomLink = ({ to, activeOnlyWhenExact, label }) => {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });
    return (
        <div style={match && { border: "1px solid red" }}>
            <Link to={to}> {label} </Link>
        </div>
    );
};

export default CustomLink;
