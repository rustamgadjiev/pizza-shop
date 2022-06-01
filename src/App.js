import "./scss/app.scss";
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaContent } from "./components/PizzaContent";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <PizzaContent />
        </div>
      </div>
    </div>
  );
};
