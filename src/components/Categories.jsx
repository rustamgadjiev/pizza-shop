import { useState } from "react";
import { categoriesList } from "./../utils/app-data";

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((category, pos) => {
          return (
            <li
              key={category}
              className={selectedCategory === pos ? "active" : ""}
              onClick={() => setSelectedCategory(pos)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
