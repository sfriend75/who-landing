import ReactGA from 'react-ga4';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import Landing from './routes/Landing';

// only init google analytics if a tracking ID is defined in env
const { REACT_APP_GA_TRACKING_ID } = process.env;
if (REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(REACT_APP_GA_TRACKING_ID, { debug: true });
  console.log(`initializing google analytics with tracking ID ${REACT_APP_GA_TRACKING_ID}`);
} else console.warn('no google analytics tracking ID provided!');

// make GA aware of what pages people navigate to in react router
const LinkGAtoRouter = withRouter(({ history }) => {
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
  });
  return null;
});

function App() {
  return (
    <Router>
      <Switch>
        {/* / goes at the bottom */}
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <LinkGAtoRouter />
    </Router>
  );
}

export default App;
