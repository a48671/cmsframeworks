import React from 'react';
import { icons } from '../Icons';
import Checkbox from '../Checkbox';
import './instrument-item.scss';

const InstrumentItem = ({data, active = false}) => {
    const { image, title, rate, url, worksCount, partnersCount, isSponsor, firstLettersOfName, shortUrl } =data;
    return (
        <div className='instrument-item'>
            <div className="instrument-item__wrapper">
                {isSponsor && <div className="instrument-item__star">{icons.star()}</div>}
                <div className="instrument-item__icon">
                    {image ? <img src={image} alt={title} /> : firstLettersOfName}
                </div>
                {
                    isSponsor
                        ? <a href={shortUrl || url} target="_blank" className="instrument-item__name">{title}</a>
                        : <div className="instrument-item__name">{title}</div>
                }
                <div className="instrument-item__projects">{worksCount} проекта</div>
                <div className="instrument-item__projects">{partnersCount} партнеров</div>
                <div className="instrument-item__rating">{rate}</div>
                <div className="instrument-item__compare"><Checkbox active={active}/></div>
                {isSponsor && <div className="instrument-item__sponsor">Спонсор</div>}
            </div>
        </div>
    );
};

export default InstrumentItem;