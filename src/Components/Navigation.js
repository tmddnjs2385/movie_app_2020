import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
    return (
        <div className="navi">
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
        </div>
    );
}

export default Navigation;
