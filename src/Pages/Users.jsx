import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
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

    return (
        <div>
            <h1>UserPage</h1>
            {users.length > 0 ? (
                <>
                    {users.map((user) => (
                        <Link key={user.id} to={`/users${user.id}`}>
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
