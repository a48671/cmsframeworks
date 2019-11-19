import React from 'react';
import './checkbox.scss';

const Checkbox = ({active = false}) => {

    const className = active ? 'checkbox active' : 'checkbox';

    return (
        <div className={className}></div>
    );
};

export default Checkbox;