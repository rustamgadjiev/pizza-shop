import { Categories } from "../components/Categories";
import { PizzaItems } from "../components/PizzaContent/PizzaItems";
import { Sort } from "../components/Sort";

export const Main = () => {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaItems />
    </>
  );
};
