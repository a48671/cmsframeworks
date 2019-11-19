import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './static-menu.scss';
import { data } from './data';
import { icons } from '../Icons';

class StaticMenu extends PureComponent {
    render() {
        return (
            <div className='static-menu'>
                {
                    data.map((item, index) => (
                        <div key={index} className="static-menu__item">
                            <NavLink className="static-menu__link" to={item.href}>
                                <div className="static-menu__icon">
                                    {icons[item.icon]()}
                                </div>
                                <div className="static-menu__text">{item.title}</div>
                            </NavLink>
                            {item.quantity && <div className="static-menu__quantity">{item.quantity}</div>}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default StaticMenu;