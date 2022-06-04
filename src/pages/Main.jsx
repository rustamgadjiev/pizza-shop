import { useState } from "react";
import { Categories } from "../components/Categories";
import { PizzaItems } from "../components/PizzaContent/PizzaItems";
import { Sort } from "../components/Sort";

export const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSort, setSelectedSort] = useState(0);
  
  return (
    <>
      <div className="content__top">
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaItems selectedCategory={selectedCategory} selectedSort={selectedSort} />
    </>
  );
};
