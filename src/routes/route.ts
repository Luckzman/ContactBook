import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    exact: false,
  },
];
