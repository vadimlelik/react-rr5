import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const User = () => {
    const [userData, setUserData] = useState();
    const params = useParams();
    const { userId } = params;
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
    console.log(userData);
    return <>{userData && <div>{userData.username}</div>}</>;
};

export default User;
