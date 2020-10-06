import React from 'react';
import logo from "../../assets/logo.svg";
import './Header.css';
import { Button } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <img src={logo} className="header-logo" alt="" />
                    <ul className="menu-links">
                        <li className="menu-item active">
                            <a href="#">Главная</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" >Блог</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Рейтинг</a>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <ul className="menu-links">
                        <li className="menu-item active">
                            <a href="#">Главная</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" >Блог</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Рейтинг</a>
                        </li>
                    </ul>
                    <div className="menu-btn">
                        <Button variant="outlined" >Зарегистрироваться</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
