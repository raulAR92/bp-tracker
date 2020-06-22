import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/home";
import Graph from "./pages/graph/graph";
import Registers from "./pages/registers/registers";
import Add from "./pages/add/add";
import NotFound from "./pages/notFound/notFound";
import PageContainer from "./components/pageContainer/pageContainer";
import { ROUTES } from "./constants/menuItems";
import { useLocation } from "react-router-dom";
import { buttonList } from "./constants/menuItems";

import "./App.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/graph" component={Graph}></Route>
        <Route exact path="/registers" component={Registers}></Route>
        <Route exact path="/add/:setId" component={Add}></Route>
        <Route exact path="/add/:setId/lectureId" component={Add}></Route>
        <Route exact path="/add/new" component={Add}></Route>
        <Route exact path="/404" component={NotFound}></Route>
        <Redirect to="/404" component={NotFound}></Redirect>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function App() {
  const location = useLocation();
  const showBanner = location.pathname === ROUTES.home;
  let title = null;
  const pageData = buttonList.find(
    (button) => button.value === location.pathname
  );
  if (pageData) {
    title = pageData.title;
  }
  return (
    <div className="App">
      <PageContainer showBanner={showBanner} title={title}>
        <Switch location={location}>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/graph" component={Graph}></Route>
          <Route exact path="/registers" component={Registers}></Route>
          <Route exact path="/add/:setId" component={Add}></Route>
          <Route exact path="/add/:setId/lectureId" component={Add}></Route>
          <Route exact path="/add/new" component={Add}></Route>
          <Route exact path="/404" component={NotFound}></Route>
          <Redirect to="/404" component={NotFound}></Redirect>
        </Switch>
      </PageContainer>
    </div>
  );
}

export default App;
