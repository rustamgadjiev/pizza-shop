import { useState } from "react";
import { Categories } from "../components/Categories";
import { Pagination } from "../components/Pagination/Pagination";
import { PizzaItems } from "../components/PizzaContent/PizzaItems";
import { Sort } from "../components/Sort";

export const Main = ({ searchValue }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSort, setSelectedSort] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="content__top">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaItems
        currentPage={currentPage}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        searchValue={searchValue}
      />
      <Pagination setCurrentPage={setCurrentPage} />
    </>
  );
};
