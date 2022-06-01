import pizzas from '../utils/Pizza-List.json';
import { Pizza } from './Pizza';

export const PizzaContent = () => {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} {...pizza} />;
        })}
      </div>
    </>
  );
};
