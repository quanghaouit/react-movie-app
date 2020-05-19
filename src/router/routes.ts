import { HomePage } from 'app/containers/HomePage/Loadable';
import { TestPage } from 'app/containers/TestPage/Loadable';

export const routes = [
  { path: '/homepage', name: 'homepage', exact: true, component: HomePage },
  { path: '/testpage', name: 'homepage', exact: true, component: TestPage },
];
