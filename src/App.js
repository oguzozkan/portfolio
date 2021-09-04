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
        <Link path="/" component={Home} exact />
        <Link path="/gallery" component={GalaryRew} exact />
        <Link path="/portfolios" component={Home2} exact />
      </Router>
    </div>
  );
}

export default App;
