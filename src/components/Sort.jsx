import { useState } from "react";
import { sortList } from "../utils/app-data";
import { ReactComponent as ArrowIcon } from '../assets/img/icon/arrow-top.svg';

export const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);

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
          {sortList[selectedSort]}
        </span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortList.map((value, pos) => (
              <li
                key={value}
                onClick={() => handleSortClick(pos)}
                className={selectedSort === pos ? "active" : ""}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
