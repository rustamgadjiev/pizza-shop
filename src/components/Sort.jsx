import { useState } from "react";
import { sortList } from "../utils/app-data";
import { ReactComponent as ArrowIcon } from '../assets/img/icon/arrow-top.svg';

export const Sort = ({ selectedSort, setSelectedSort }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSortClick = (index) => {
    setSelectedSort(index);
    setIsVisible(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowIcon />
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisible(!isVisible)}>
          {sortList[selectedSort].name}
        </span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortList.map((item, pos) => (
              <li
                key={item.name}
                onClick={() => handleSortClick(pos)}
                className={selectedSort === pos ? "active" : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
