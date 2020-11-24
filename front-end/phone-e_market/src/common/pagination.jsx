/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';

function Pagination(props) {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return (
        <nav aria-label="Page navigation example" style={{ paddingLeft: '4%' }}>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            currentPage === page
                                ? 'page-item active'
                                : 'page-item'
                        }
                        key={page}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
