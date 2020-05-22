import { RootState } from 'types';
import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';
import { keyBy } from 'lodash';
import { genreMap } from 'types/movie';
// // First select the relevant part from the state
const selectDomain = (state: RootState) => state.homepage || initialState;

export const selectLoadingPage = createSelector([selectDomain], homepageState => homepageState.page);

export const selectLoadingPageType = createSelector([selectDomain], homepageState => homepageState.type);

export const selectGenres = createSelector([selectDomain], homepageState => homepageState.genres);

export const selectMapGenres = createSelector([selectDomain], homepageState => {
  return keyBy(homepageState.genres, 'id') as genreMap;
});

export const selectMovies = createSelector([selectDomain], homepageState => homepageState.movies);

export const selectLoading = createSelector([selectDomain], homepageState => homepageState.loading);

export const selectError = createSelector([selectDomain], homepageState => homepageState.error);
