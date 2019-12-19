import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './route';
// import Home from '../pages/Home';
// import NotFound from '../pages/NotFound';

const MainRoute: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={Home} exact />
        <Route path="/" component={NotFound} exact /> */}

        {routes.map((route, i) => (
          <Route key={`route${i}`} path={route.path} component={route.component} exact={route.exact} />
        ))}
      </Switch>
    </Router>
  );
};

export default MainRoute;
