import { useState } from "react";
import { CATEGORIES_LIST } from './../utils/Constants';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {CATEGORIES_LIST.map((category, pos) => {
          return (
            <li
              className={activeIndex === pos ? "active" : ""}
              onClick={() => setActiveIndex(pos)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
