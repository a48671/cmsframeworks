import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';
import { data } from "./data";

const Menu = () => (
    <div className='menu'>
        {
            data.map((item, index) => (
                    <NavLink
                        key={index}
                        className='menu__link'
                        to={item.href}
                        activeClassName='active'
                    >
                        {item.title}
                    </NavLink>
            ))
        }
    </div>
);


export default Menu;