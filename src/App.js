import { Container } from "@mui/system";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import Comparison from "./Pages/Comparison/Comparison";
import Lawyers from "./Pages/Lawyers/Lawyers";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/compare" component={Comparison} />
              <Route path="/lawyers" component={Lawyers} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
