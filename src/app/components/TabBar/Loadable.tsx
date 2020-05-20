/**
 * Asynchronously loads the component for Tab Bar
 */

import { lazyLoad } from 'utils/loadable';

export const TabBar = lazyLoad(
  () => import('./index'),
  module => module.TabBar,
);
