import Home from "./pages/home";
import Home2 from "./pages/home2";
import Deneme from "./Components/Deneme";
import GalaryRew from "./Components/Galary/GalaryRew";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path={"/"} exact component={Home} />
        <Switch>
          <Route path={"/gallery"} exact component={GalaryRew} />
          <Route path={"/portfolios"} exact component={Home2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
