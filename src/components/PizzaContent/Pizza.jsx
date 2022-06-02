import { useState } from "react";
import { pizzaType } from "../../utils/app-data";
import { ReactComponent as PlusIcon } from '../../assets/img/icon/plus.svg';

export const Pizza = ({ title, price, imageUrl, sizes, types }) => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [selectedType, setSelectedType] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, pos) => (
            <li
              key={type}
              onClick={() => setSelectedType(pos)}
              className={selectedType === pos ? "active" : ""}
            >
              {pizzaType[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, pos) => (
            <li
              key={size}
              onClick={() => setSelectedSize(pos)}
              className={selectedSize === pos ? "active" : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          onClick={() => setPizzaCount(c => c + 1)}
          className="button button--outline button--add"
        >
          <PlusIcon />
          <span>Добавить</span>
          <i>{pizzaCount}</i>
        </button>
      </div>
    </div>
  );
};
