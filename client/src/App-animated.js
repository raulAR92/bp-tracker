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
import { spring, AnimatedSwitch } from "react-router-transition";

import "./App.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const AnimatedSwitchIm = withRouter(({ location }) => (
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/graph" component={Graph}></Route>
    <Route exact path="/registers" component={Registers}></Route>
    <Route exact path="/add/:setId" component={Add}></Route>
    <Route exact path="/add/:setId/lectureId" component={Add}></Route>
    <Route exact path="/add/new" component={Add}></Route>
    <Route exact path="/404" component={NotFound}></Route>
    <Redirect to="/404" component={NotFound}></Redirect>
  </AnimatedSwitch>
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
        <AnimatedSwitchIm></AnimatedSwitchIm>
      </PageContainer>
    </div>
  );
}

export default App;
