import React, { useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './pages/home';
import * as ROUTES from './constants/routes';

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const tractPage = (page) => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };
const App = () => {
  // const childRef = useRef();
  // let location = useLocation();

  // useEffect(() => {
  //   const page = location.pathname;
  //   document.body.classList.add('is-loaded');
  //   childRef.current.init();
  //   tractPage(page);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location]);

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
