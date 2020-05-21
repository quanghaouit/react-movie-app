/**
 * Asynchronously loads the component for Selection
 */

import { lazyLoad } from 'utils/loadable';

export const Selection = lazyLoad(
  () => import('./index'),
  module => module.Selection,
);
