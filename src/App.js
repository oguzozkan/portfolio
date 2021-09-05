import Home from "./pages/home";
import Home2 from "./pages/home2";
import Deneme from "./Components/Deneme";
import GalaryRew from "./Components/Galary/GalaryRew";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <GalaryRew />
          </Route>
          <Route path="/portfolios">
            <Home2 />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
