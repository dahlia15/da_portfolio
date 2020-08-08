import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

    const location = useLocation();

    return (
        <div>
            <ul className="nav nav-tabs" style={{justifyContent: "space-around", paddingTop: 10, paddingBottom: 10}}>
                <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link-active" : "nav-active"} style={{color: "darkslategrey"}}> <i class="fas fa-home"></i> </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "nav-link-active" : "nav-active"} style={{color: "darkslategrey"}}> <i class="fas fa-folder-open"></i> </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className={location.pathname === "/Contact" ? "nav-link-active" : "nav-active"} style={{color: "darkslategrey"}}> <i class="fas fa-address-book"></i> </Link>
                </li>
            </ul>
        </div>
    )
};

export default NavTabs;