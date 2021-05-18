import React from 'react';
import {FaUserCircle, IoApps} from "react-icons/all";

const UserIcons = () => {
    return (
        <div className={'user-icons'}>
            <div className="apps">
                <IoApps />
            </div>
            <div className="user">
                <FaUserCircle/>
            </div>
        </div>
    );
};

export default UserIcons;