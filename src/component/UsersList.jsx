import React from "react";
import { useLocation } from "react-router";
import Breadcruumb from "./Breadcruumb";

const UsersList = (props) => {
    let location = useLocation();
    return (
        <>
            <Breadcruumb locationPath={location} />
            <div>{props.name}</div>
        </>
    );
};

export default UsersList;
