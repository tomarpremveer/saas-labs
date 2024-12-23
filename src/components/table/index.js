import Pagination from '../pagination';
import React, { useState , useMemo} from 'react';
import styles from "./styles.module.css";

const Table = ({ data=[], columns =[], onPageChange = () => {}, pageSize, totalItems }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    const totalPages = Math.ceil(totalItems / pageSize);

    const paginatedData =useMemo(() => {
        if(!data) return [];
        return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }, [data, currentPage, pageSize]);



    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.field}>{column.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column) => (
                                <td key={column.field}>{row[column.field]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Table;
