import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcruumb from "../component/Breadcruumb";
import User from "./User";

const UsersPage = ({ location }) => {
    const [users, setUsers] = useState([]);
    const params = useParams();
    const { uId } = params;
    console.log(uId);

    const onMatchedRoutes = (matchedRoutes) => {
        const _matchedRoutes = matchedRoutes.map((matchedRoute) => {
            if (matchedRoute.match && matchedRoute.match.path === "/users/id") {
                const userId = matchedRoute.match?.params.id;
                return {
                    match: matchedRoute.match,
                    route: {
                        ...matchedRoute.route,
                        path: matchedRoute.match.url,
                        breadcrumbName: userId,
                    },
                };
            } else {
                return matchedRoute;
            }
        });

        return [
            {
                route: { path: "/", breadcrumbName: "users" },
                ..._matchedRoutes,
            },
        ];
    };
    const getUsers = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    if (uId) {
        return <User userId={uId} />;
    }

    return (
        <div>
            <h1>UserPage</h1>

            {users.length > 0 ? (
                <>
                    <Breadcruumb
                        locationPath={location.pathname}
                        onMatchedRoutes={onMatchedRoutes}
                    />
                    {users.map((user) => (
                        <Link key={user.id} to={`/users/${user.id}`}>
                            <div>Users {user.name}</div>
                        </Link>
                    ))}
                </>
            ) : (
                "Loading"
            )}
        </div>
    );
};

export default UsersPage;
