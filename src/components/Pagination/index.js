import React from 'react';
import './pagination.scss';

const Pagination = ({prevHandler, nextHandler, page, lastPage}) => {
    return (
        <div className="pagination">
            <div
                className={`pagination__arrow prev ${page <= 1 ? 'hidden' : ''}`}
                onClick={prevHandler}
            ></div>
            <div className="pagination__page">{page}</div>
            <div
                className={`pagination__arrow next ${page >= lastPage ? 'hidden' : ''}`}
                onClick={nextHandler}
            ></div>
        </div>
    );
};

export default Pagination;