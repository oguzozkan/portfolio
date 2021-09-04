import Home from "./pages/home";
import Home2 from "./pages/home2";
import Deneme from "./Components/Deneme";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/deneme" component={Deneme} exact />
          <Route path="/portfolios" component={Home2} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
