import { useEffect, useState } from "react";
import { PIZZA_LIST_URL } from "../../utils/constants";
import { Pizza } from "./Pizza";
import { Preloader } from "../Helpers/Preloader";
import { sortList } from "../../utils/app-data";

export const PizzaItems = ({
  selectedSort,
  selectedCategory,
  searchValue,
  currentPage,
}) => {
  const [pizzaList, setPizzaList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortBy = sortList[selectedSort].sortProperty.replace("-", "");
  const order = sortList[selectedSort].sortProperty[0] === "-" ? "asc" : "desc";
  const checkCategory = selectedCategory ? `category=${selectedCategory}` : "";
  const search = searchValue ? `search=${searchValue}` : "";

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(
        `${PIZZA_LIST_URL}?sortBy=${sortBy}&order=${order}&${checkCategory}&${search}&page=${currentPage}&limit=4`
      )
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
  }, [sortBy, order, checkCategory, search, currentPage]);

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
