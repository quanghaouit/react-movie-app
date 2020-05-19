/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const TestPage = lazyLoad(
  () => import('./index'),
  module => module.TestPage,
);
