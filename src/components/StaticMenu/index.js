import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './static-menu.scss';
import { data } from './data';
import { icons } from '../Icons';

class StaticMenu extends PureComponent {
    render() {

        const { favorites } = this.props;

        const favoritesCount = Object.keys(favorites).length;

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
                            {item.alias === 'favorites' && <div className="static-menu__quantity">{favoritesCount}</div>}
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favorites: state.instruments.favorites
});

export default connect(mapStateToProps)(StaticMenu);