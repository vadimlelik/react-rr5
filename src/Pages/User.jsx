import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Breadcruumb from "../component/Breadcruumb";

const User = ({ userId }) => {
    const [userData, setUserData] = useState();
    const { pathname } = useLocation();

    const getUserId = async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        setUserData(data);
    };

    useEffect(() => {
        getUserId();
    }, [userId]);

    return (
        <>
            {userData && (
                <>
                    <h1>UserPage</h1>
                    <Breadcruumb locationPath={pathname} />
                    <div>{userData.username}</div>
                </>
            )}
        </>
    );
};

export default User;
