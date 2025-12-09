import React from 'react';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
<div className="body-container flex-1" style={{ height: 'calc(100vh - 64px)' }}>            <Outlet />
        </div>
    );
};

export default Body;
