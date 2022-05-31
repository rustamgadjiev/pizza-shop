import "./scss/app.scss";
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { Pizza } from './components/Pizza';

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
            <Pizza title='Мексиканская' price={395} />
            <Pizza title='Чизбургер-пицца' price={499} />
            <Pizza title='Чизбургер-пицца' price={599} />
            <Pizza title='Чизбургер-пицца' price={295} />
            <Pizza title='Чизбургер-пицца' price={199} />
            <Pizza title='Чизбургер-пицца' price={249} />
          </div>
        </div>
      </div>
    </div>
  );
};
