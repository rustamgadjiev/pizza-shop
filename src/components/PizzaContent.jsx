import { useEffect, useState } from "react";
import { PIZZA_LIST_URL } from "../utils/constants";
import { Pizza } from "./Pizza";

export const PizzaContent = () => {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    try {
      fetch(PIZZA_LIST_URL)
        .then((resp) => resp.json())
        .then((pizzaList) => setPizzaList(pizzaList))
        .catch(console.log);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaList.map((pizza) => {
          return <Pizza key={pizza.id} {...pizza} />;
        })}
      </div>
    </>
  );
};
