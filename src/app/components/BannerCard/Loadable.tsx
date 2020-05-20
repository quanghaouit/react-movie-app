/**
 * Asynchronously loads the component for Banner card
 */

import { lazyLoad } from 'utils/loadable';

export const BannerCard = lazyLoad(
  () => import('./index'),
  module => module.BannerCard,
);