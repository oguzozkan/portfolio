import Home from "./pages/home";
import Home2 from "./pages/home2";
import Deneme from "./Components/Deneme";
import GalaryRew from "./Components/Galary/GalaryRew";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router basename="/portfolio">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/gallery"} component={GalaryRew} />
          <Route exact path={"/portfolios"} component={Home2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
