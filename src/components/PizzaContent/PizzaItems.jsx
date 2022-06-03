import { useEffect, useState } from "react";
import { PIZZA_LIST_URL } from "../../utils/constants";
import { Pizza } from "./Pizza";
import { Preloader } from "../Helpers/Preloader";

export const PizzaItems = () => {
  const [pizzaList, setPizzaList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(PIZZA_LIST_URL)
        .then((resp) => resp.json())
        .then((pizzaList) => {
          setPizzaList(pizzaList);
          setIsLoading(false);
        })
        .catch(console.log);
    } catch (error) {
      console.log(error);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content__items">
      <Preloader isLoading={isLoading}>
        {pizzaList.map((pizza) => {
          return <Pizza key={pizza.id} {...pizza} />;
        })}
      </Preloader>
    </div>
  );
};
