import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navigation = () => {
    return (
        <div className="nav">
            <NavLink to="/" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Home</NavLink>
            <NavLink to="/game" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Tic tac toe</NavLink>
            <NavLink to="/calculator" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Calculator</NavLink>
            <NavLink to="/tasks" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Tasks</NavLink>
            <NavLink to="/quizz" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Quizz</NavLink>
            <NavLink to="/breweries" activeStyle={{ color: '#f4f4f4', textDecoration: 'underline' }} className="nav-link" exact={true}>Breweries</NavLink>
        </div>
    )

}

export default Navigation;