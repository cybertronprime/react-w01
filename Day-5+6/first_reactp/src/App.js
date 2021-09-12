import "./App.css";
import HooksPage from "./pages/HooksPage";
import homePage from './pages/homePage/HomePage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //js code
  //Routes Creation

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HooksPage} />
          <Route exact path="/home" component={homePage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
