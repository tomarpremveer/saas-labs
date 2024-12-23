import React from 'react';
import styles from './styles.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const renderPageNumbers = (t) => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`page-button ${currentPage === i ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };
   

    return (
        <div className={styles.pagination}>
            {renderPageNumbers()}
        </div>
    );
};

export default Pagination;
