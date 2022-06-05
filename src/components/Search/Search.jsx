import s from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/img/icon/search.svg";
import { ReactComponent as ClearIcon } from "../../assets/img/icon/clear.svg";

export const Search = ({ searchValue, setSearchValue }) => {
  return (
    <label className={s.wrapper}>
      <SearchIcon />
      <input
        className={s.search}
        placeholder="Поиск пицц..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && <ClearIcon onClick={() => setSearchValue("")} />}
    </label>
  );
};
