import "./scss/app.scss";
import { Header } from "./components/Header";
import { AppRoutes } from "./AppRoutes";
import { useState } from "react";

export const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <AppRoutes searchValue={searchValue} />
        </div>
      </div>
    </div>
  );
};
