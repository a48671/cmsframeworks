import React from 'react';
import { icons } from '../Icons';
import Checkbox from '../Checkbox';
import ButtonDell from '../ButtonDell';
import './instrument-item.scss';

const InstrumentItem = ({
    data,
    active = false,
    onClickCheckbox,
    onClickDell,
    showSponsor,
    showRating,
    showCompare,
    showDell
}) => {

    const { image, title, rate, url, worksCount, partnersCount, isSponsor, firstLettersOfName, shortUrl } = data;

    return (
        <div className={`instrument-item ${showSponsor ? 'is-sponsor' : null}`}>
            <div className="instrument-item__wrapper">
                {showSponsor && isSponsor && <div className="instrument-item__star">{icons.star()}</div>}
                <div className="instrument-item__icon">
                    {image ? <img src={image} alt={title} /> : firstLettersOfName}
                </div>
                {
                    isSponsor
                        ? <a href={shortUrl || url} className="instrument-item__name">{title}</a>
                        : <div className="instrument-item__name">{title}</div>
                }
                <div className="instrument-item__projects">{worksCount ? worksCount : 0} проекта</div>
                <div className="instrument-item__projects">{partnersCount ? partnersCount : 0} партнеров</div>
                {showDell && <div className="instrument-item__projects"><ButtonDell onClickDell={onClickDell}/></div>}
                {showRating && <div className="instrument-item__rating">{rate}</div>}
                {
                    showCompare &&
                    <div className="instrument-item__compare">
                        <Checkbox active={active} onClick={() => onClickCheckbox(data)}/>
                    </div>
                }
                {showSponsor && isSponsor && <div className="instrument-item__sponsor">Спонсор</div>}
            </div>
        </div>
    );
};

export default InstrumentItem;