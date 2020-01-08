//agar komponennya terbaca
import React from 'react';
import './HelloComponent.css';

const HelloComponent = () => {
    //gunakan className pada penulisan class untuk CSS pada file reactjs
    return <p className="text-p"> Hello functional </p>
}

//agar komponennya daoat digunakan dimana saja
export default HelloComponent;