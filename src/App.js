import "./scss/app.scss";
import { Header } from "./components/Header";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="container">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};
