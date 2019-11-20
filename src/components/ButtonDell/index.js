import React from 'react';
import './button-dell.scss';

const ButtonDell = ({onClickDell}) => {
    return (
        <div className="button-dell" onClick={onClickDell}>
            Удалить
        </div>
    );
};

export default ButtonDell;