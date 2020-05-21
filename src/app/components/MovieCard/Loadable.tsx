/**
 * Asynchronously loads the component for movie card
 */

import { lazyLoad } from 'utils/loadable';

export const MovieCard = lazyLoad(
  () => import('./index'),
  module => module.MovieCard,
);
