import { Container } from "@mui/system";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import Comparison from "./Pages/Comparison/Comparison";
import Lawyers from "./Pages/Lawyers/Lawyers";
import Header from "./Component/Header/Header";
import bgImg from "./assets/background.jpg";

import KommunicateChat from "./chat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div
          className="app"
          // style={{
          //   backgroundImage: `url(${bgImg})`,
          //   backgroundSize: "cover",
          //   opacity: 0.8,
          //   zIndex: 12,
          // }}
        >
          <Container>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/compare" component={Comparison} />
              <Route path="/lawyers" component={Lawyers} />
            </Switch>
          </Container>
          <KommunicateChat />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
