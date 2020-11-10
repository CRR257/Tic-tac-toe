import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navigation = () => {
    return (
        <div className="nav">
            <NavLink to="/" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Home</NavLink>
            <NavLink to="/game" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Tic tac toe</NavLink>
            <NavLink to="/counter" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Counter</NavLink>
        </div>
    )

}

export default Navigation;