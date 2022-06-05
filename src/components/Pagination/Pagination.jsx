import ReactPaginate from "react-paginate";
import s from "./Pagination.module.scss";

export const Pagination = ({ setCurrentPage }) => {
  return (
    <ReactPaginate
      className={s.paginate}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(page) => setCurrentPage(page.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};
