import Home from "./pages/home";
import Home2 from "./pages/home2";
import Deneme from "./Components/Deneme";
import GalaryRew from "./Components/Galary/GalaryRew";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/portfolio"} component={Home} />
          <Route path={"/portfolio/gallery"} component={GalaryRew} />
          <Route path={"/portfolio/portfolios"} component={Home2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
