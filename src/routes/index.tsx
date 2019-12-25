import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './route';

const MainRoute: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={`route${i}`} path={route.path} component={route.component} exact={route.exact} />
        ))}
      </Switch>
    </Router>
  );
};

export default MainRoute;
