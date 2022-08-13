import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './pagination.module.scss'


type PaginationProps = {
    currentPage: number;
    changePage: (page: number) => void;
}

const Pagination: React.FC <PaginationProps> = ({currentPage, changePage}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => changePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage - 1}
            previousLabel="<"
        />
    );
};

export default Pagination;