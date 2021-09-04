import Home from "./pages/home";
import Home2 from "./pages/home2";
import Deneme from "./Components/Deneme";
import GalaryRew from "./Components/Galary/GalaryRew";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router basename={window.location.pathname || ""}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio/gallery" component={GalaryRew} exact />
          <Route path="/portfolio/portfolios" component={Home2} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
