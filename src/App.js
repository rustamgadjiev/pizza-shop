import "./scss/app.scss";
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { Pizza } from './components/Pizza';
import pizzas from './utils/Pizza-List.json';

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
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map(pizza => {
                return <Pizza {...pizza} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
