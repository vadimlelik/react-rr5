import React from "react";
import { matchRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Breadcruumb = ({ locationPath, onMatchedRoutes }) => {
    let matchedRoutes = matchRoutes(routes, locationPath);

    if (typeof onMatchedRoutes === "function") {
        matchedRoutes = onMatchedRoutes(matchedRoutes);
    }

    return (
        <nav>
            <ol>
                {matchedRoutes.map((matchRoute, i) => {
                    const { path, breadcrumbName } = matchRoute.route;
                    const isActive = path === locationPath;
                    console.log(path);
                    return isActive ? (
                        <li key={i} className="breadcrumb-item active">
                            {breadcrumbName}
                        </li>
                    ) : (
                        <li key={i}>
                            <Link to={path}>{breadcrumbName}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcruumb;
