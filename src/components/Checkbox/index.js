import React from 'react';
import './checkbox.scss';

const Checkbox = ({active = false, onClick}) => {

    const className = active ? 'checkbox active' : 'checkbox';

    return (
        <div className={className} onClick={onClick}></div>
    );
};

export default Checkbox;